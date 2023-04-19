import { Injectable } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { validateDto } from '../utils/validation/validate-dto';
import { plainToInstance } from 'class-transformer';
const fs = require('fs');

@Injectable()
export class CityService {
  private cities: CityDto[];

  constructor() {
    this.cities = plainToInstance(
      CityDto,
      JSON.parse(fs.readFileSync('./data/cities.json', 'utf8')) as [],
    );

    console.log(this.cities.length);
    this.cities.forEach((value) => {
      validateDto(value, CityDto.name);
    });
  }

  getCities(): CityDto[] {
    return this.cities;
  }
}
