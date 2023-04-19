import { validateDto } from './validate-dto';
import { IsOptional, IsString } from 'class-validator';

class TestDto {
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  optionalText: string;
}

describe('ValidateDTO test', () => {
  test('Validate correct dto does not throw error', () => {
    const dto = new TestDto();
    dto.text = 'text';
    expect(() => validateDto(dto, TestDto.name)).not.toThrowError();
  });

  test('Validate incorrect dto throws error', () => {
    const dto = new TestDto();
    expect(() => validateDto(dto, TestDto.name)).toThrowError(
      `Invalid fields at ${TestDto.name}: text must be a string`,
    );
  });
});
