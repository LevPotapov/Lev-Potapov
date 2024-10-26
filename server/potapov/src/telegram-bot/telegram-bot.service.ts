import { Inject, Injectable } from '@nestjs/common';
import { Context, Telegraf } from 'telegraf';
import { TelegramOptions } from './telegram-options.interface';
import { TELEGRAM_MODULE_OPTIONS } from './telegram-bot.constants';
import { MailResponseDto } from './dto/mail-response.dto';

@Injectable()
export class TelegramBotService {
  bot: Telegraf;
  options: TelegramOptions;
  constructor(@Inject(TELEGRAM_MODULE_OPTIONS) options: TelegramOptions) {
    this.bot = new Telegraf(options.token);
    this.options = options;
  }

  async sendMessage(message: string, chatId: string = this.options.chatId) {
    await this.bot.telegram.sendMessage(chatId, message);
  }

  async botLauncher(
    domain: string,
    port: number,
    path: string,
    secretToken: string,
  ) {
    await this.bot.launch({
      webhook: {
        domain: domain,
        port: port,
        path: path,
        secretToken: secretToken,
      },
    });
  }

  async gettingResponse(
    ctx: Context,
    chatId: string = this.options.chatId,
  ): Promise<MailResponseDto> {
    const message = '👍';
    await this.bot.telegram.sendMessage(chatId, message);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    let name = ctx.message.reply_to_message.text.split('Email:  ');
    name = name[0].split('Name:  ');
    name = name[1].split('\n')[0];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    let email = ctx.message.reply_to_message.text.split('Phone:  ')[0];
    email = email.split('Email:  ')[1];
    email = email.split('\n')[0];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const text = ctx.message.text;

    return {
      name,
      email,
      text,
    };
  }
}
