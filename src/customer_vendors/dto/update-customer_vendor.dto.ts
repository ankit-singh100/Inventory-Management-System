import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerVendorDto } from './create-customer_vendor.dto';

export class UpdateCustomerVendorDto extends PartialType(
  CreateCustomerVendorDto,
) {}
