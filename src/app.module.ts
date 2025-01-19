import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RolesModule, OrganizationsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
