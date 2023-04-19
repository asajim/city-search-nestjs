import { IsLatitude, IsLongitude } from 'class-validator';

export class CoordinateDto {
  @IsLatitude()
  lat: number;

  @IsLongitude()
  lon: number;
}
