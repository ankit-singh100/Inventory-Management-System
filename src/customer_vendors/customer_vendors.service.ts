import { Injectable } from '@nestjs/common';
import { CreateCustomerVendorDto } from './dto/create-customer_vendor.dto';
import { UpdateCustomerVendorDto } from './dto/update-customer_vendor.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CustomerVendorsService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createCustomerVendorDto: CreateCustomerVendorDto) {
    return this.prisma.customer_Vendor.create({
      data: createCustomerVendorDto,
    });
  }

  findAll() {
    return this.prisma.customer_Vendor.findMany();
  }

  findOne(id: number) {
    return this.prisma.customer_Vendor.findUnique({ where: { id } });
  }

  update(id: number, updateCustomerVendorDto: UpdateCustomerVendorDto) {
    return this.prisma.customer_Vendor.update({
      where: { id },
      data: updateCustomerVendorDto,
    });
  }

  remove(id: number) {
    return this.prisma.customer_Vendor.delete({ where: { id } });
  }
}
