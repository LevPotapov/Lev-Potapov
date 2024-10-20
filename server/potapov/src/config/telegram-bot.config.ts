import { ConfigService } from '@nestjs/config';
import { TelegramOptions } from 'src/telegram-bot/telegram-options.interface';

export const getTelegramBotConfig = (
  configService: ConfigService,
): TelegramOptions => {
  const token = configService.get('TELEGRAM_BOT_TOKEN');
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN not specified!');
  }

  const chatId = configService.get('CHAT_ID');
  if (!token) {
    throw new Error('CHAT_ID not specified!');
  }

  return {
    token,
    chatId,
  };
};
