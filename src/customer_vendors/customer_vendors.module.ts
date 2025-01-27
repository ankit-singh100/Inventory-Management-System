import { Module } from '@nestjs/common';
import { CustomerVendorsService } from './customer_vendors.service';
import { CustomerVendorsController } from './customer_vendors.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CustomerVendorsController],
  providers: [CustomerVendorsService, PrismaClient],
})
export class CustomerVendorsModule {}
