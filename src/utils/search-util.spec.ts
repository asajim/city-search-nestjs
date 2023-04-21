import { CoordinateDto } from '../city/dto/coordinate.dto';
import { NOT_FOUND_INDEX, SearchUtil } from './search-util';
import 'reflect-metadata';
import { CityDto } from '../city/dto/city.dto';

describe('SearchUtil', () => {
  let cities: CityDto[] = [];
  const cityNames: string[] = [
    'Aardenburg',
    'Alkmaar',
    'Almelo',
    'Almere',
    'Amersfoort',
    'Amstelveen',
    'Amsterdam',
    'Apeldoorn',
    'Appingedam',
    'Arnemuiden',
    'Arnhem',
    'Assen',
    'Bergen op Zoom',
    'Blokzijl',
    'Bolsward',
    'Breda',
    'Bredevoort',
    'Coevorden',
    'Culemborg',
    'Delft',
    'Delfzijl',
    'Den Helder',
    'Deventer',
    'Doesburg',
    'Doetinchem',
    'Dokkum',
    'Dordrecht',
    'Echt',
    'Edam',
    'Eindhoven',
    'Enschede',
    'Franeker',
  ];
  const searchUtil = new SearchUtil();

  beforeAll(() => {
    cities = cityNames.map((value, index) => {
      const dto = new CityDto();
      dto._id = index;
      dto.name = value;
      dto.country = 'NL';
      dto.coord = new CoordinateDto();
      dto.coord.lat = 0;
      dto.coord.lon = 0;
      return dto;
    });
  });

  it('Find index returns correct index on valid index', () => {
    expect(searchUtil.findIndex('Bergen'.toLowerCase(), cities)).toEqual(12);
    expect(searchUtil.findIndex('Do'.toLowerCase(), cities)).toEqual(23);
    expect(searchUtil.findIndex('Dor'.toLowerCase(), cities)).toEqual(26);
    expect(searchUtil.findIndex('B'.toLowerCase(), cities)).toEqual(15);
    expect(searchUtil.findIndex('Breda'.toLowerCase(), cities)).toEqual(15);
    expect(searchUtil.findIndex('Franeker'.toLowerCase(), cities)).toEqual(
      cities.length - 1,
    );
  });

  it('Find index returns not found index on invalid index', () => {
    // Not found because findIndex expects lowercase input
    expect(searchUtil.findIndex('Bergen', cities)).toEqual(NOT_FOUND_INDEX);
    expect(searchUtil.findIndex('z'.toLowerCase(), cities)).toEqual(
      NOT_FOUND_INDEX,
    );
    expect(searchUtil.findIndex('fkalsmf'.toLowerCase(), cities)).toEqual(
      NOT_FOUND_INDEX,
    );
    expect(searchUtil.findIndex('&!@&'.toLowerCase(), cities)).toEqual(
      NOT_FOUND_INDEX,
    );
    expect(searchUtil.findIndex('1231'.toLowerCase(), cities)).toEqual(
      NOT_FOUND_INDEX,
    );
  });
});
