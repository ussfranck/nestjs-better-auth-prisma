import { Injectable, Inject, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import type { BetterAuth } from '../../better-auth';
import { AUTH_INSTANCE } from './auth';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(AUTH_INSTANCE) private readonly auth: BetterAuth) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    try {
      const session = await this.auth.api.getSession({
        headers: req.headers as any,
      });
      (req as any).session = session;
    } catch (e) {
      (req as any).session = null;
    }
    next();
  }
}
