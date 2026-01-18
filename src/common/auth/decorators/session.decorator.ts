import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Session = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.session;
  },
);
