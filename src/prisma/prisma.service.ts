import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AdapterPrismaService {
  public client: PrismaClient;

  // constructor(private readonly _prisma = new PrismaClient()) {}

  // get prisma() {
  //   return this._prisma;
  // }

  constructor() {
    this.client = new PrismaClient();
  }
}
