import { Controller, Get, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SearchParamsDto } from './dto/search-params.dto';

@ApiTags('City')
@Controller('api/v1/cities')
export class CityController {
  constructor(private cityService: CityService) {}

  @ApiOperation({ summary: 'Get all cities' })
  @Get()
  getCities(): CityDto[] {
    return this.cityService.getCities();
  }

  @ApiOperation({ summary: 'Search cities by name (case insensitive)' })
  @ApiQuery({ name: 'name', description: 'City name (case insensitive)' })
  @Get('search')
  searchCities(@Query() params: SearchParamsDto): CityDto[] {
    return this.cityService.search(params.name);
  }

  @ApiOperation({ summary: 'Get cities count' })
  @Get('/count')
  getCitiesCount(): number {
    return this.cityService.getCitiesCount();
  }
}
