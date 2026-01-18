import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  protected map: Record<string, number> = {
    UNPROCESSABLE_ENTITY: 422,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
    //   and more from BetterAuth
  };

  @Post('register')
  async register(
    @Body() body: { email: string; password: string; name: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const result: any = await this.authService.register(body);
    console.log(result);

    if (result?.error) {
      res.status(this.map[result.error.status] ?? 400);
      return result;
    }

    const setCookie = result.headers?.get('set-cookie');
    if (setCookie) res.setHeader('set-cookie', setCookie);
    return result.response;
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const result: any = await this.authService.login(body);
    console.log(result);

    if (result?.error) {
      res.status(this.map[result.error.status] ?? 400);
      return result;
    }

    const setCookie = result.headers?.get('set-cookie');
    if (setCookie) res.setHeader('set-cookie', setCookie);

    return result.response;
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const headers = new Headers();
    const cookie = req.headers.cookie;
    if (cookie) headers.set('cookie', cookie);

    const result = await this.authService.logout(headers);
    console.log(result);

    const setCookie = result.headers?.get('set-cookie');
    if (setCookie) res.setHeader('set-cookie', setCookie);

    return result.response;
  }

  @Get('me')
  async me(@Req() req: Request) {
    const headers = new Headers();
    const cookie = req.headers.cookie;
    if (cookie) headers.set('cookie', cookie);

    return await this.authService.getSession(headers);
  }
}
