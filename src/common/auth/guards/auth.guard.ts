import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest()
    return !!req.session
  }
}
