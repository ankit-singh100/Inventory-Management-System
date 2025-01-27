import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createPurchaseDto: CreatePurchaseDto) {
    return this.prisma.purchase.create({ data: createPurchaseDto });
  }

  findAll() {
    return this.prisma.purchase.findMany();
  }

  findOne(id: number) {
    return this.prisma.purchase.findUnique({ where: { id } });
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.prisma.purchase.update({
      where: { id },
      data: updatePurchaseDto,
    });
  }

  remove(id: number) {
    return this.prisma.purchase.delete({ where: { id } });
  }
}
