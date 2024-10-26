import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAuth =
      request.get('x-telegram-bot-api-secret-token') ===
      process.env.TELEGRAM_BOT_API_SECRET_TOKEN;

    if (!isAuth) throw new UnauthorizedException('Not authorized');

    return isAuth;
  }
}
