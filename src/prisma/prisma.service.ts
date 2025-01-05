import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AdapterPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public client: PrismaClient;

  constructor() {
    super({
      log: ['warn', 'error'],
    });
  }

  onModuleInit() {
    // TODO: Add a logger here
    console.log('Connecting to the database');
    return this.$connect();
  }

  onModuleDestroy() {
    // TODO: Add a logger here
    console.log('Disconnecting from the database');
    return this.$disconnect();
  }
}
