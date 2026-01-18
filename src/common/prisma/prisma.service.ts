import { Injectable, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    super({
      adapter: new PrismaPg(pool),
      log: ['error', 'warn'],
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
