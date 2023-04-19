import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('City')
@Controller('api/v1/cities')
export class CityController {
  constructor(private cityService: CityService) {}

  @ApiOperation({ summary: 'Get cities' })
  @Get()
  getCities(): CityDto[] {
    return this.cityService.getCities();
  }

  @ApiOperation({ summary: 'Get cities count' })
  @Get('/count')
  getCitiesCount(): number {
    return this.cityService.getCitiesCount();
  }
}
