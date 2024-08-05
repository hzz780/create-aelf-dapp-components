import { PartialType } from '@nestjs/mapped-types';
import { CreateChaingptDto } from './create-chaingpt.dto';

export class UpdateChaingptDto extends PartialType(CreateChaingptDto) {}
