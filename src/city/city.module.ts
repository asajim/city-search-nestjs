import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CitySearchUtil } from './city-search-util.service';

@Module({
  controllers: [CityController],
  providers: [CityService, CitySearchUtil],
})
export class CityModule {}
