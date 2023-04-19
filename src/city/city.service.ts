import { Injectable } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { validateDto } from '../utils/validation/validate-dto';
import { plainToInstance } from 'class-transformer';
import * as fs from 'fs';

export const CITIES_COUNT = 209557;

@Injectable()
export class CityService {
  private cities: CityDto[];

  constructor() {
    this.cities = plainToInstance(
      CityDto,
      JSON.parse(fs.readFileSync('./data/cities.json', 'utf8')) as [],
    );

    this.cities.forEach((value) => {
      validateDto(value, CityDto.name);
    });
  }

  getCities(): CityDto[] {
    return this.cities;
  }

  getCitiesCount(): number {
    return this.cities.length;
  }
}
