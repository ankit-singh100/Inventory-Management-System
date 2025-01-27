import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createItemDto: CreateItemDto) {
    await this.getItemByName(createItemDto.name);
    return this.prisma.item.create({ data: createItemDto });
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({ where: { id }, data: updateItemDto });
  }

  remove(id: number) {
    return this.prisma.item.delete({ where: { id } });
  }

  private async getItemByName(name: string) {
    const itemByName = await this.prisma.item.findUnique({
      where: { name },
    });
    if (itemByName) {
      throw new NotFoundException('Item already exists');
    }
    return itemByName;
  }
}
