import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}

class MessageDto {
  @IsString()
  id: string;

  @IsString()
  content: string;
}

export class Message {
  [key: string]: MessageDto;
}

export { MessageDto };
