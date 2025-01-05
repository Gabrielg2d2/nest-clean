import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AdapterPrismaService } from './prisma/prisma.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly db: AdapterPrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async test() {
    return await this.db.client.user.findMany();
  }
}
