import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PeriodoVacacionalAnio {
  public value: number;
  private campo = 'anio';

  public constructor(value: number) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: number): void {
    if (!value) {
      throw new BadRequest({
        message: 'El Anio es requerido',
        campo: this.campo,
      });
    }

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El Anio tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
