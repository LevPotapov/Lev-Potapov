import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MessagesDocument = Message & Document;

@Schema()
export class Message {
  _id: mongoose.Types.ObjectId | string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  text: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Message);
