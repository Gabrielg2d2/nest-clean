import { Module } from '@nestjs/common';
import { CreateAccountController } from './controllers/accounts/create-account.controller';
import { AdapterPrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [AdapterPrismaService],
})
export class AppModule {}
