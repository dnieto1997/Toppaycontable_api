import { PartialType } from '@nestjs/swagger';
import { CreateApiSiigoDto } from './create-api-siigo.dto';

export class UpdateApiSiigoDto extends PartialType(CreateApiSiigoDto) {}
