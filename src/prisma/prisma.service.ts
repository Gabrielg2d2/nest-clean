import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AdapterPrisma } from 'src/@domain/@adapters/prisma/prisma';

@Injectable()
export class AdapterPrismaService implements OnModuleInit, OnModuleDestroy {
  public client: AdapterPrisma;

  constructor() {
    this.client = new AdapterPrisma();
  }

  onModuleInit() {
    // TODO: Add a logger here
    console.log('Connecting to the database');
    return this.client.$connect();
  }

  onModuleDestroy() {
    // TODO: Add a logger here
    console.log('Disconnecting from the database');
    return this.client.$disconnect();
  }
}
