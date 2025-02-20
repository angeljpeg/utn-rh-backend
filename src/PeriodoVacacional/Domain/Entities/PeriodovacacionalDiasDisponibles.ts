import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PeriodoVacacionalDiasDisponibles {
  public value: number;
  private campo = 'dias_disponibles';

  public constructor(value: number) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: number): void {
    if (!value) {
      throw new BadRequest({
        message: 'Los dias disponibles son requeridos',
        campo: this.campo,
      });
    }

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'Los dias disponibles tienen que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
