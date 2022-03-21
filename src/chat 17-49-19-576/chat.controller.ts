import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './schemas/chat.schema';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getAll(): Promise<Chat[]> {
    return await this.chatService.getAll();
  }

  // @Get()
  // readChatData(): string {
  //   return this.chatService.getChatData();
  // }

  // @Post()
  // createChatData(): string {
  //   return this.chatService.postChatData();
  // }

  // @Put()
  // updateChatData(): string {
  //   return this.chatService.putChatData();
  // }

  // @Delete()
  // deleteChatData(): string {
  //   return this.chatService.deleteChatData();
  // }
}
