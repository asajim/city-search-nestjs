import { CityDto } from '../city/dto/city.dto';
import { Logger } from '@nestjs/common';

export const NOT_FOUND_INDEX = -1;

export class SearchUtil {
  private logger = new Logger(SearchUtil.name);

  /**
   * Search city's name based on [name] using binary search
   * 1. It will look for a city that starts with [name]
   * 2. After the index is found, track to both left and right sides
   * @param name city name, case-insensitive
   * @param cities
   * @return all cities where its names starts with name
   */
  binarySearch(name: string, cities: CityDto[]): CityDto[] {
    this.logger.debug(`Search: ${name}`);
    if (!name.trim()) {
      return cities;
    }

    const lowercaseName = name.toLowerCase();
    const index = this.findIndex(lowercaseName, cities);
    this.logger.debug(`Index of ${lowercaseName}: ${index}`);
    if (index < 0) {
      return [];
    }

    let left = index;
    while (
      left > 0 &&
      cities[left - 1].name.toLowerCase().startsWith(lowercaseName)
    ) {
      left--;
    }

    let right = index;
    while (
      right < cities.length - 1 &&
      cities[right + 1].name.toLowerCase().startsWith(lowercaseName)
    ) {
      right++;
    }
    return cities.slice(left, right + 1);
  }

  /**
   * Find index of a city that starts with [lowercaseName] using binary search.
   * @param lowercaseName name of city, case-sensitive
   * @param cities list of sorted cities ascending based on its name
   * @return index of the first element found that has name starts with [lowercaseName]
   *   [NOT_FOUND_INDEX] if not found
   */
  findIndex(lowercaseName: string, cities: CityDto[]): number {
    let index = 0;
    let limit = cities.length - 1;
    while (index <= limit) {
      const midIndex = Math.floor((index + limit) / 2);
      const city = cities[midIndex];
      if (city.name.toLowerCase().startsWith(lowercaseName)) {
        return midIndex;
      }
      const comparison = city.name.toLowerCase().localeCompare(lowercaseName);
      if (comparison < 0) {
        index = midIndex + 1;
        continue;
      }
      if (comparison > 0) {
        limit = midIndex - 1;
        continue;
      }
      return midIndex;
    }

    return NOT_FOUND_INDEX;
  }
}
