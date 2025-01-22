import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [RolesModule, OrganizationsModule, UsersModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
