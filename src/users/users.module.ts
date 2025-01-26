import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client';

import { RolesService } from 'src/roles/roles.service';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '15d' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaClient, RolesService, OrganizationsService],
})
export class UsersModule {}
