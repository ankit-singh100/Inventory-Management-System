import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, PrismaClient],
})
export class OrganizationsModule {}
