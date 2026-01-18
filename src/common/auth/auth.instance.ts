import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../prisma/prisma.service';

export const createAuth = (prisma: PrismaService) =>
  betterAuth({
    database: prismaAdapter(prisma, { provider: 'postgresql' }), // Make it coherent with your schema file
    appName: process.env.APP_NAME ?? 'YOUR_APP',
    secret: process.env.BETTER_AUTH_SECRET ?? 'secret',
    baseURL: process.env.BETTER_AUTH_BASE_URL || 'http://localhost:3000',
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      revokeSessionsOnPasswordReset: true,
    },
    session: {
      expiresIn: 60 * 60 * 24 * 7,
      //   Auto Rotation if user is active
      updateAge: 60 * 40 * 24,
      //   Anti violation session
      freshAge: 60 * 60 * 2,
    },
    advanced: {
      cookies: {
        sessionToken: {
          name: 'yourapp.session',
          options: {
            httpOnly: true,
            sameSite: '1max',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
          },
        },
      },
    },
    rateLimit: {
      enabled: true,
      window: 60,
      max: 100,
    },
    trustedOrigins: ['http://localhost:3000', 'http://localhost:3001'],
  });
