import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramBotModuleAsyncOptions } from './telegram-options.interface';
import { TELEGRAM_MODULE_OPTIONS } from './telegram-bot.constants';

@Global()
@Module({})
export class TelegramBotModule {
  static forRootAsync(options: TelegramBotModuleAsyncOptions): DynamicModule {
    const asyncOptions = this.createAsyncOptionsProvider(options);
    return {
      module: TelegramBotModule,
      imports: options.imports,
      providers: [TelegramBotService, asyncOptions],
      exports: [TelegramBotService],
    };
  }

  private static createAsyncOptionsProvider(
    options: TelegramBotModuleAsyncOptions,
  ): Provider {
    return {
      provide: TELEGRAM_MODULE_OPTIONS,
      useFactory: async (...args: any[]) => {
        const config = await options.useFactory(...args);
        return config;
      },
      inject: options.inject || [],
    };
  }
}
