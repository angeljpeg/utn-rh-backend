import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PeriodoVacacionalId {
  public value: number;
  private campo = 'periodo_vacacional_id';

  public constructor(value: number) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: number): void {
    if (!value) {
      throw new BadRequest({
        message: 'El ID es requerido',
        campo: this.campo,
      });
    }

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El ID tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
