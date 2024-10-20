import { Controller, Body, Post, Res, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Response } from 'express';
import { TelegramBotService } from 'src/telegram-bot/telegram-bot.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly telegramBotService: TelegramBotService,
  ) {}

  @Post()
  async creatingNewUserMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Res() res: Response,
  ) {
    await this.messagesService.creatingNewUserMessage(createMessageDto);

    res.statusCode = HttpStatus.CREATED;
    res.send('message created');

    const message =
      `Email: ${createMessageDto.email}\n` +
      `Phone: ${createMessageDto.phone}\n` +
      `Message: ${createMessageDto.text}`;

    return await this.telegramBotService.sendMessage(message);
  }
}
