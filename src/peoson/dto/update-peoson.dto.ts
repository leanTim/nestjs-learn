import { PartialType } from '@nestjs/mapped-types';
import { CreatePeosonDto } from './create-peoson.dto';

export class UpdatePeosonDto extends PartialType(CreatePeosonDto) {}
