import { ModuleMetadata } from '@nestjs/common';

export interface TelegramOptions {
  chatId: string;
  token: string;
}

export interface TelegramBotModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<TelegramOptions> | TelegramOptions;
  inject?: any[];
}
