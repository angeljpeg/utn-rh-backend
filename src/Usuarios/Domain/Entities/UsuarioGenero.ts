import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class UsuarioGenero {
  public value: 'M' | 'F';

  public constructor(value: 'M' | 'F') {
    this.ensureIsValid(value);
    this.value = value;
  }

  public ensureIsValid(value: 'M' | 'F'): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El Genero es necesario',
        campo: 'genero',
      });

    if (value !== 'M' && value !== 'F')
      throw new InvalidDataException({
        message: 'El Genero debe ser M o F',
        campo: 'genero',
        data: value,
      });
  }
}
