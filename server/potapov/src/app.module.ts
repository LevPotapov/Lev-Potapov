import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './config/MongooseConfigService';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import configuration from './config/configuration';
import { getTelegramBotConfig } from './config/telegram-bot.config';
import { MailerModule } from './mailer/mailer.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { FilesModule } from './files/files.module';

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
    MessagesModule,
    TelegramBotModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramBotConfig,
    }),
    MailerModule,
    SkillsModule,
    ProjectsModule,
    FilesModule,
  ],
})
export class AppModule {}
