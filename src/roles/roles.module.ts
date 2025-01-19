import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaClient],
})
export class RolesModule {}
