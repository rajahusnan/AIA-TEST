import { PartialType } from '@nestjs/mapped-types';
import { CreateGalerryDto } from './create-galerry.dto';

export class UpdateGalerryDto extends PartialType(CreateGalerryDto) {}
