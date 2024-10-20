import { Body, Controller, Post } from '@nestjs/common';
import { TelegramBotService } from './telegram-bot.service';

@Controller('telegram-bot')
export class TelegramBotController {
  constructor(private readonly telegramBotService: TelegramBotService) {}

  @Post()
  async redirectingResponses(@Body() ctx: any) {
    await this.telegramBotService.redirectingResponses(ctx);
  }
}
