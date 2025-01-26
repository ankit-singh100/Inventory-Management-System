import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({ data: createRoleDto });
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: number) {
    await this.getRole(id);
    return this.prisma.role.findFirst({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.getRole(id);
    return this.prisma.role.update({
      where: { id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    const userId = await this.getRole(id);
    if (userId) {
      throw new NotFoundException('Role is in use');
    }
    return this.prisma.user.delete({ where: { id } });
  }

  private async getRole(id: number) {
    const role = await this.prisma.role.findFirst({ where: { id } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }
}
