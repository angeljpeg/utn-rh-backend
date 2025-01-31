import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class UsuarioGenero {
  public value: string;

  public constructor(value: string) {
    this.value = value;
  }

  public ensureIsValid(value: string): void {
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
