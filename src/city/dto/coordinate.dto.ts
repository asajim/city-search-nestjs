import { IsLatitude, IsLongitude } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoordinateDto {
  @IsLatitude()
  @ApiProperty()
  lat: number;

  @IsLongitude()
  @ApiProperty()
  lon: number;
}
