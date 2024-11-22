import {
  Controller,
  Body,
  Post,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MailerService } from '../mailer/mailer.service';
import { SendMailDto } from '../mailer/dto/send-mail.dto';
import { Response } from 'express';
import { TelegramBotService } from 'src/telegram-bot/telegram-bot.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { MailResponseDto } from 'src/telegram-bot/dto/mail-response.dto';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Context } from 'telegraf';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly telegramBotService: TelegramBotService,
    private readonly mailerService: MailerService,
  ) {}

  @Post('demands')
  @ApiBody({ type: CreateMessageDto })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'message created' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  async newUserMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Res() res: Response,
  ) {
    try {
      await this.messagesService.creatingNewUserMessage(createMessageDto);
      res.statusCode = HttpStatus.CREATED;
      res.send('message created');

      const userMessage =
        `Name:  ${createMessageDto.userName}\n` +
        `Email:  ${createMessageDto.email}\n` +
        `Phone:  ${createMessageDto.phone}\n` +
        `Message:  ${createMessageDto.text}`;

      await this.telegramBotService.sendMessage(userMessage);

      const autoResponse: SendMailDto = {
        from: { name: 'Lev Potapov', address: 'lev@potapov.fr' },
        recipient: {
          name: `${createMessageDto.userName}`,
          address: `${createMessageDto.email}`,
        },
        subject: 'Auto Response',
        html: `<p><strong>Hello ${createMessageDto.userName}!</strong></p><p>Thank you for your message, I will reply to you in the next 48 hours.</p><p>Cheers!</p>`,
      };

      return await this.mailerService.sendMail(autoResponse);
    } catch (error) {
      res.statusCode = HttpStatus.BAD_REQUEST;
      res.send(error);

      return;
    }
  }

  @Post('returns')
  @ApiExcludeEndpoint()
  @UseGuards(AuthGuard)
  async redirectingResponses(@Body() ctx: Context) {
    const messageResponse: MailResponseDto =
      await this.telegramBotService.gettingResponse(ctx);
    try {
      const mail: SendMailDto = {
        from: { name: 'Lev Potapov', address: 'lev@potapov.fr' },
        recipient: {
          name: `${messageResponse.name}`,
          address: `${messageResponse.email}`,
        },
        subject: 'Making contact',
        html: `<p><strong>Hello ${messageResponse.name}!</strong></p><p>${messageResponse.text}.</p><p>Cheers!</p>`,
      };

      return await this.mailerService.sendMail(mail);
    } catch (error) {
      console.log(error);
    }
  }
}
