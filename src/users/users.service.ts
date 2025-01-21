import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { RolesService } from 'src/roles/roles.service';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { hash } from 'bcrypt';
// import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly rolesService: RolesService,
    private readonly organizationService: OrganizationsService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const roleObj = await this.prisma.role.findFirst({
      where: { name: createUserDto.role },
    });
    if (!roleObj) {
      throw new BadRequestException(`${createUserDto.role} not found`);
    }
    createUserDto.role_id = roleObj.id;
    await this.organizationService.findOne(createUserDto.organization_id);
    await this.checkIfEmailExists(createUserDto.email);
    await this.checkMobileExists(createUserDto.mobile);
    createUserDto.password = await hash(createUserDto.password, 10);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { role, ...rest } = createUserDto;
    return this.prisma.user.create({
      data: rest,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    await this.getUser(id);
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.getUser(id);
    if (updateUserDto.role_id) {
      await this.rolesService.findOne(updateUserDto.role_id);
    }

    if (updateUserDto.organization_id) {
      await this.organizationService.findOne(updateUserDto.organization_id);
    }

    if (updateUserDto.email) {
      await this.checkIfEmailExists(updateUserDto.email);
    }

    if (updateUserDto.mobile) {
      await this.checkMobileExists(updateUserDto.mobile);
    }

    if (updateUserDto.password && user.password !== updateUserDto.password) {
      updateUserDto.password = await hash(updateUserDto.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.getUser(id);
    return this.prisma.user.delete({ where: { id } });
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!user) {
      throw new BadRequestException('user not found');
    }
    return user;
  }

  async checkIfEmailExists(email: string) {
    const emailExist = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (emailExist) {
      throw new BadRequestException(`${email} already exists`);
    }
  }

  async checkMobileExists(mobile: string) {
    const mobileExist = await this.prisma.user.findFirst({
      where: { mobile: mobile },
    });
    if (mobileExist) {
      throw new BadRequestException(`${mobile} already exists`);
    }
  }
}
