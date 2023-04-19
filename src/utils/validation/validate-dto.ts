import { validateSync } from 'class-validator';
import { InternalServerErrorException } from '@nestjs/common';

export function validateDto(dto: any, dtoName: string) {
  const errors = validateSync(dto);
  if (errors.length) {
    throw new InternalServerErrorException(
      `Invalid fields at ${dtoName}: ${errors
        .map((value) => Object.values(value.constraints))
        .join(', ')}`,
    );
  }
}
