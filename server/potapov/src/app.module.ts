import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './config/MongooseConfigService';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import configuration from './config/configuration';
import { getTelegramBotConfig } from './config/telegram-bot.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    AuthModule,
    MessagesModule,
    TelegramBotModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramBotConfig,
    }),
  ],
})
export class AppModule {}
