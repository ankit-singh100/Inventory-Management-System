import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  customer_id: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;

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
