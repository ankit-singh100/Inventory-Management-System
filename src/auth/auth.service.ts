import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
// import { User } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    const emailExists = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });
    if (emailExists) {
      throw new BadRequestException(`${registerDto.email} already exists`);
    }
    const mobileExists = await this.prisma.user.findUnique({
      where: { mobile: registerDto.mobile },
    });
    if (mobileExists) {
      throw new BadRequestException(`${registerDto.mobile} already exists`);
    }

    registerDto.password = await hash(registerDto.password, 10);

    // const user =
    return this.prisma.user.create({ data: registerDto });

    // const token = await this.jwtService.signAsync({
    //   where: {
    //     user_id: user.id,
    //     role_id: user.role_id,
    //     organization_id: user.organization_id,
    //   },
    // });
    // return { token };
  }
  // @Post('login')
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: loginDto.user }, { mobile: loginDto.user }],
      },
    });
    if (!user) {
      throw new BadRequestException(`user ${loginDto.user} not found`);
    }
    if (!(await compare(loginDto.password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    // const token = await this.jwtService.signAsync({
    //   where: {
    //     user_id: user.id,
    //     role_id: user.role_id,
    //     organization_id: user.organization_id,
    //   },
    // });
    // return { token };
  }
}
