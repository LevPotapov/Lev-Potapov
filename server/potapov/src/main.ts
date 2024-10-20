import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { SessionBuilder } from '@ngrok/ngrok';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';

async function bootstrap() {
  const port = 3000;
  const bot = new TelegramBotService({
    chatId: process.env.CHAT_ID,
    token: process.env.TELEGRAM_BOT_TOKEN,
  });
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);

  // Setup ngrok ingress
  const session = await new SessionBuilder().authtokenFromEnv().connect();
  const listener = await session.httpEndpoint().listen();
  new Logger('main').log(`Ingress established at ${listener.url()}`);
  listener.forward(`localhost:${port}`);

  bot.botLauncher(listener.url(), 4000, '/telegram-bot');
}
bootstrap();
