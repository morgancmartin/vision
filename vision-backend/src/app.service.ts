import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Local World!';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
