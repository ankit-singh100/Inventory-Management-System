import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerVendorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  street?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsOptional()
  province?: string;

  @IsBoolean()
  @IsNotEmpty()
  is_vendor: boolean;
}
