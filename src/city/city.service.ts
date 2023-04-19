import { Injectable, Logger } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { validateDto } from '../utils/validation/validate-dto';
import { plainToInstance } from 'class-transformer';
import * as fs from 'fs';

export const CITIES_COUNT = 209557;

@Injectable()
export class CityService {
  private logger = new Logger(CityService.name);

  private cities: CityDto[];

  constructor() {
    this.loadCitiesFromJson();
  }

  getCities(): CityDto[] {
    return this.cities;
  }

  getCitiesCount(): number {
    return this.cities.length;
  }

  private loadCitiesFromJson() {
    this.logger.log('Load cities from JSON');

    this.cities = plainToInstance(
      CityDto,
      JSON.parse(fs.readFileSync('./data/cities.json', 'utf8')) as [],
    );

    this.cities.forEach((value) => {
      validateDto(value, CityDto.name);
    });

    this.logger.log(`Cities are loaded. Total count ${this.cities.length} `);
  }
}
