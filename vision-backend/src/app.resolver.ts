import { Resolver, Query, Args } from '@nestjs/graphql'
import { Logger, Injectable } from '@nestjs/common'
import { promisify } from 'util'
import { exec as cbExec } from 'child_process'
import { readFileSync } from 'fs'

const exec = promisify(cbExec)
const generationDir = 'generation'
const dirpath = __dirname.split('/')
const rootDir = dirpath.slice(0, dirpath.length - 1).join('/')

@Injectable()
@Resolver()
export class AppResolver {
  private readonly logger = new Logger(AppResolver.name)

  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!'
  }
  @Query(() => String)
  hello(@Args('name') name: string): string {
    return `Hello ${name}!`
  }
  @Query(() => String)
  async prompt(@Args('prompt') prompt: string): Promise<string> {
    this.logger.log(`GENERATING WITH PROMPT: ${prompt}`)
    const { stderr } = await generateImage(prompt)
    const lines = stderr.split('\n')
    const imageLine = lines[lines.length - 4]
    const fileName = imageLine.split(' ').slice(8).join(' ')
    this.logger.log(`GOT FILENAME: ${fileName}`)
    const filepath = `${rootDir}/${generationDir}/${fileName}`
    this.logger.log(`GOT FILEPATH: ${filepath}`)
    const fileInBase64 = readFileSync(filepath, 'base64')

    return fileInBase64
  }
}

async function generateImage(prompt: string) {
  const cdCmd = `cd ${generationDir}`
  const rmCmd = `${cdCmd}; rm ./*`
  try {
    await exec(rmCmd)
  } catch (err) {}
  const genCmd = `${cdCmd}; python3 -m stability_sdk.client -W 512 -H 512 "${prompt}"`
  const result = await exec(genCmd)

  return result
}
