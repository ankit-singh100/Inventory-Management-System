import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client';

import { RolesService } from 'src/roles/roles.service';
import { OrganizationsService } from 'src/organizations/organizations.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient, RolesService, OrganizationsService],
})
export class UsersModule {}
