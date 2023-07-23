import type { User, GenImage } from "@prisma/client";
import { promisify } from "util";
import { exec as cbExec } from "child_process";
import { readFileSync } from "fs";

import { prisma } from "~/db.server";

const exec = promisify(cbExec);
const generationDir = "generation";
const dirpath = __dirname.split("/");
const rootDir = dirpath.slice(0, dirpath.length - 1).join("/");

export async function getGenImageByUser({ userId }: { userId: User["id"] }) {
  const genImage = await prisma.genImage.findFirst({
    select: { id: true, prompt: true },
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  const fileName = genImage.id;
  const filepath = `${rootDir}/${generationDir}/${fileName}.png`;

  const fileInBase64 = readFileSync(filepath, "base64");

  return genImage && fileInBase64
    ? {
        genImage,
        fileInBase64,
      }
    : undefined;
}

export function getGenImageListItems({ userId }: { userId: User["id"] }) {
  return prisma.genImage.findMany({
    where: { userId },
    select: { id: true, prompt: true },
    orderBy: { updatedAt: "desc" },
  });
}

async function generateImage(prompt: string, fileName: string) {
  const cdCmd = `cd ${generationDir}`;
  const rmCmd = `${cdCmd}; rm ./*`;
  try {
    await exec(rmCmd);
  } catch (err) {}
  const genCmd = `${cdCmd}; python3 -m stability_sdk.client -W 512 -H 512 "${prompt}"`;
  const result = await exec(genCmd);

  const { stderr } = result;

  const lines = stderr.split("\n");
  const imageLine = lines[lines.length - 4];
  const genFileName = imageLine.split(" ").slice(8).join(`\\ `);
  console.log(`genFileName: ${genFileName}`);
  const filepath = `${rootDir}/${generationDir}/${fileName}.png`;
  const renameCmd = `${cdCmd}; mv ${genFileName} ${fileName}.png`;
  const extrasRmCmd = `${cdCmd}; rm ./*.json; rm ./*.pb`;
  try {
    await exec(extrasRmCmd);
    await exec(renameCmd);
  } catch (err) {
    console.error(err);
  }
  const fileInBase64 = readFileSync(filepath, "base64");

  return fileInBase64;
}

export async function createGenImage({
  prompt,
  userId,
}: Pick<GenImage, "prompt"> & { userId: User["id"] }) {
  const genImage = await prisma.genImage.create({
    data: {
      prompt,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  const fileInBase64 = await generateImage(prompt, genImage.id);

  return {
    fileInBase64,
    genImage,
  };
}

export function deleteGenImage({
  id,
  userId,
}: Pick<GenImage, "id"> & { userId: User["id"] }) {
  return prisma.genImage.deleteMany({
    where: { id, userId },
  });
}
