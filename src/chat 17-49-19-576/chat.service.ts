import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  async getAll(): Promise<Chat[]> {
    return await this.chatModel.find().exec();
  }
  //   getChatData(): string {
  //     return 'read4';
  //   }

  //   postChatData(): string {
  //     return 'create3';
  //   }

  //   putChatData(): string {
  //     return 'update2';
  //   }

  //   deleteChatData(): string {
  //     return 'delete1';
  //   }
}
