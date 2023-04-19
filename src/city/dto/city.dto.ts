import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { CoordinateDto } from './coordinate.dto';
import { Type } from 'class-transformer';

export class CityDto {
  @IsNumber()
  _id: number;

  @IsString()
  country: string;

  @IsString()
  name: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CoordinateDto)
  coord: CoordinateDto;
}
