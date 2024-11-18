import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';

async function bootstrap() {
  const port = 4000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Potapov doc')
    .setDescription('Info about the API of my personal website')
    .setVersion('1.0')
    .addTag('messages')
    .addTag('skills')
    .addTag('projects')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(port);
  new Logger('main').log(`Ingress established at ${port}`);

  // Telegram bot
  const bot = new TelegramBotService({
    chatId: process.env.CHAT_ID,
    token: process.env.TELEGRAM_BOT_TOKEN,
  });
  bot.botLauncher(
    process.env.MY_URL,
    5000,
    '/api/messages/returns',
    process.env.TELEGRAM_BOT_API_SECRET_TOKEN,
  );
}
bootstrap();
