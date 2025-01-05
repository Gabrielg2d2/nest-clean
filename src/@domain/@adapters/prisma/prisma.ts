import { PrismaClient } from '@prisma/client';

export class AdapterPrisma extends PrismaClient {
  public client: PrismaClient | undefined;

  constructor() {
    super({
      log: ['warn', 'error'],
    });
  }
}
