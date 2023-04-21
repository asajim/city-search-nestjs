import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { CoordinateDto } from './coordinate.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @ApiProperty()
  @IsNumber()
  _id: number;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => CoordinateDto)
  coord: CoordinateDto;
}
