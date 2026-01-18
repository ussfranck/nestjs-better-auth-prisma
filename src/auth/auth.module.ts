import { Module, Global } from '@nestjs/common';
import { AUTH_INSTANCE } from '../common/auth/auth';
import { createAuth } from '../common/auth/auth.instance';
import { PrismaService } from '../common/prisma/prisma.service';
import { PrismaModule } from '../common/prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: AUTH_INSTANCE,
      useFactory: (prisma: PrismaService) => createAuth(prisma),
      inject: [PrismaService],
    },
    AuthService,
  ],
  controllers: [AuthController],
  exports: [AUTH_INSTANCE, AuthService],
})
export class AuthModule {}
