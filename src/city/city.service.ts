import { Injectable, Logger } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { validateDto } from '../utils/validation/validate-dto';
import { plainToInstance } from 'class-transformer';
import * as fs from 'fs';
import { CitySearchUtil } from './city-search-util.service';

export const CITIES_COUNT = 209557;

@Injectable()
export class CityService {
  private logger = new Logger(CityService.name);

  /**
   * List of sorted cities ascending based on its name
   * @private
   */
  private cities: CityDto[];

  constructor(private searchUtil: CitySearchUtil) {
    this.loadCitiesFromJson();
  }

  getCities(): CityDto[] {
    return this.cities;
  }

  getCitiesCount(): number {
    return this.cities.length;
  }

  /**
   * Search city's name based on [name] using binary search
   * 1. It will look for a city that starts with [name]
   * 2. After the index is found, track to both left and right sides
   * @param name city name, case insensitive
   * @return all cities where its names starts with name
   */
  search(name: string): CityDto[] {
    return this.searchUtil.binarySearch(name, this.cities);
  }

  private loadCitiesFromJson() {
    this.logger.log('Load cities from JSON');

    this.cities = plainToInstance(
      CityDto,
      JSON.parse(fs.readFileSync('./data/cities.json', 'utf8')) as [],
    ).sort((a, b) => {
      const result = a.name.localeCompare(b.name);
      if (result !== 0) {
        return result;
      }
      return a.country.localeCompare(b.country);
    });

    this.cities.forEach((value) => {
      validateDto(value, CityDto.name);
    });

    this.logger.log(`Cities are loaded. Total count ${this.cities.length} `);
  }
}
