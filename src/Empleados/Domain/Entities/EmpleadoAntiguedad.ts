import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoAntiguedad {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'La antiguedad del empleado es necesaria',
        campo: 'EmpleadoAntiguedad',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'La antiguedad tiene que ser un numero',
        campo: 'EmpleadoAntiguedad',
        data: value,
      });
    }
    if (value < 0) {
      throw new BadRequest({
        message: 'La antiguedad tiene que ser mayor que cero',
        campo: 'EmpleadoAntiguedad',
        data: value,
      });
    }
  }
}
