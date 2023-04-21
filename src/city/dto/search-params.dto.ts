import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchParamsDto {
  @IsString()
  @ApiProperty()
  name: string;
}
