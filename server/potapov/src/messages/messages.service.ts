import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessagesDocument } from 'src/schemas/messages.schema';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messagesModel: Model<MessagesDocument>,
  ) {}

  async creatingNewUserMessage(
    createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    const createMessage = new this.messagesModel(createMessageDto);
    return createMessage.save();
  }
}
