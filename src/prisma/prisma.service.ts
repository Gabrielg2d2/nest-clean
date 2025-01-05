import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AdapterPrismaService extends PrismaClient {
  public client: PrismaClient;

  constructor() {
    super({
      log: ['warn', 'error'],
    });
  }
}
