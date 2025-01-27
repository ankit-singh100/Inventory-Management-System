import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePurchaseDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  vendor_id: number;

  @IsNumber()
  @IsNotEmpty()
  sub_total: number;

  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @IsNumber()
  @IsNotEmpty()
  before_tax: number;

  @IsNumber()
  @IsNotEmpty()
  tax_amount: number;
}
