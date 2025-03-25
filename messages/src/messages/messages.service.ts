import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessageRepository) {
    // this.messageRepository = new MessageRepository();
  }

  async findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  async findAll() {
    return this.messageRepository.findAll();
  }

  async create(content: string) {
    return this.messageRepository.create(content);
  }
}
