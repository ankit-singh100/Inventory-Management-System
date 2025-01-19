import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createOrganizationDto: CreateOrganizationDto) {
    await this.getOrganizationByName(createOrganizationDto.name);
    return await this.prisma.organization.create({
      data: createOrganizationDto,
    });
  }

  async findAll() {
    return await this.prisma.organization.findMany();
  }

  async findOne(id: number) {
    await this.getOrganizationById(id);
    return await this.prisma.organization.findUnique({ where: { id } });
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    await this.getOrganizationByName(updateOrganizationDto.name);
    await this.getOrganizationById(id);
    return await this.prisma.organization.update({
      where: { id },
      data: updateOrganizationDto,
    });
  }

  async remove(id: number) {
    await this.getOrganizationById(id);
    return this.prisma.organization.delete({ where: { id } });
  }

  private async getOrganizationById(id: number) {
    const organizationById = await this.prisma.organization.findUnique({
      where: { id },
    });
    if (!organizationById) {
      throw new NotFoundException('Organization not found');
    }
    return organizationById;
  }

  private async getOrganizationByName(name: string) {
    const organizationByName = await this.prisma.organization.findUnique({
      where: { name },
    });
    if (organizationByName) {
      throw new NotFoundException('Organization already exists');
    }
    return organizationByName;
  }
}
