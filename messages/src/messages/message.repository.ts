import { readFile, writeFile } from 'fs/promises';
import { Message, MessageDto } from './dtos/create-message.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as Message;
    const messageId: MessageDto = messages[id];
    return messageId;
  }

  async findAll() {
    const contents: string = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as Message;
    return messages;
  }

  async create(content: string) {
    const contents: string = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as Message;
    const id: number = Math.floor(Math.random() * 999);
    messages[id] = { id: id.toString(), content };
    await writeFile('messages.json', JSON.stringify(messages, null, 2));
  }
}
