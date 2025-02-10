import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class EmpleadoAntiguedad {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'La antiguedad del empleado es necesaria',
        campo: 'EmpleadoAntiguedad',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'La antiguedad tiene que ser un numero',
        campo: 'EmpleadoAntigueadad',
        data: value,
      });
    }
    if (value < 0) {
      throw new InvalidDataException({
        message: 'La antiguedad tiene que ser mayor que cero',
        campo: 'EmpleadoAntigueadad',
        data: value,
      });
    }
  }
}
