import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';

@Controller('cities')
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  getCities(): CityDto[] {
    return this.cityService.getCities();
  }

  @Get('/count')
  getCitiesCount(): number {
    return this.cityService.getCitiesCount();
  }
}
