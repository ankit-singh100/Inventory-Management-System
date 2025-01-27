import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { CustomerVendorsModule } from './customer_vendors/customer_vendors.module';
import { SalesModule } from './sales/sales.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    RolesModule,
    OrganizationsModule,
    UsersModule,
    AuthModule,
    ItemsModule,
    CustomerVendorsModule,
    SalesModule,
    PurchaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
