import { Inject, Injectable } from '@nestjs/common';
import { APIError } from 'better-auth/api';
import { AUTH_INSTANCE } from '../common/auth/auth';
import type { BetterAuth } from '../better-auth';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_INSTANCE) private readonly auth: BetterAuth) {}

  async register(body: { email: string; password: string; name: string }) {
    try {
      return await this.auth.api.signUpEmail({
        returnHeaders: true,
        body,
      });
    } catch (e) {
      if (e instanceof APIError) {
        return { error: { message: e.message, status: e.status } };
      }
      throw e;
    }
  }

  async login(body: { email: string; password: string }) {
    try {
      return await this.auth.api.signInEmail({
        returnHeaders: true,
        body,
      });
    } catch (e) {
      if (e instanceof APIError) {
        return { error: { message: e.message, status: e.status } };
      }
      throw e;
    }
  }

  async logout(headers: Headers) {
    return await this.auth.api.signOut({
      returnHeaders: true,
      headers,
    });
  }

  async getSession(headers: Headers) {
    return await this.auth.api.getSession({ headers });
  }
}
