import { Inject, Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { TelegramOptions } from './telegram-options.interface';
import { TELEGRAM_MODULE_OPTIONS } from './telegram-bot.constants';

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

  async botLauncher(domain: string, port: number, path: string) {
    await this.bot.launch({
      webhook: {
        domain: domain,
        port: port,
        path: path,
      },
    });
  }

  async redirectingResponses(ctx: any, chatId: string = this.options.chatId) {
    const message = '👍';
    await this.bot.telegram.sendMessage(chatId, message);
    const direction = ctx.message.reply_to_message.text;
    const responseMessage = ctx.message.text;
    console.log(direction, `\nResponse: ${responseMessage}`);
  }
}
