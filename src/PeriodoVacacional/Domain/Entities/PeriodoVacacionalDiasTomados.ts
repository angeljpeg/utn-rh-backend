import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PeriodoVacacionalDiasTomados {
  public value: number;
  private campo: string;
  public constructor(value: number, campo?: string) {
    this.campo = campo ?? 'dias_tomados';
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: number): void {
    if (!value) {
      throw new BadRequest({
        message: 'Los dias tomados son requeridos',
        campo: this.campo,
      });
    }

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'Los dias tomados tienen que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
