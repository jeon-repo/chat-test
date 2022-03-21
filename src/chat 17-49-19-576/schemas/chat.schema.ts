import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  bread: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
