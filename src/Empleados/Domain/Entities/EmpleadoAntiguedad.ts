import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoAntiguedad {
  public value: number;
  private campo = 'antiguedad';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'La antiguedad del empleado es necesaria',
        campo: this.campo,
      });

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'La antiguedad tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
    if (value < 0) {
      throw new BadRequest({
        message: 'La antiguedad tiene que ser mayor que cero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
