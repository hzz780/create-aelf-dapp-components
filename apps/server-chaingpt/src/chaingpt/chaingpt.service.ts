import { Injectable } from '@nestjs/common';
import { CreateChaingptDto } from './dto/create-chaingpt.dto';
import { Observable } from 'rxjs';
import * as process from 'process';
import { GeneralChat } from '@chaingpt/generalchat';

@Injectable()
export class ChaingptService {
  private chatClient: GeneralChat;

  constructor() {
    this.chatClient = new GeneralChat({
      apiKey: process.env.CHAIN_GPT_API_KEY as string,
    });
  }
  chat(createChaingptDto: CreateChaingptDto): Observable<{ data: string }> {
    return new Observable((observer) => {
      const main = async () => {
        // console.log('createChaingptDto.data', createChaingptDto.data);
        // observer.next({ data: createChaingptDto.data });
        // observer.complete();
        const stream = await this.chatClient.createChatStream({
          question: createChaingptDto.data, // 'Explain quantum computing in simple terms',
          chatHistory: 'off',
        });
        stream.on('data', (chunk: any) => {
          console.log('data', chunk.toString());
          observer.next({ data: chunk.toString() });
        });
        stream.on('end', () => {
          observer.complete();
        });
      };
      main().catch((error) => {
        console.log('error', error);
        observer.next({ data: 'Please try again' });
        observer.complete();
      });
      // setTimeout(() => {
      //   observer.next({ data: 'hello' });
      //   setTimeout(() => {
      //     observer.next({ data: 'world' + Math.floor(Math.random() * 1024) });
      //     observer.complete();
      //   }, 2000);
      // }, 2000);
    });
  }

  findAll() {
    return `This action returns all chaingpt`;
  }
}
