import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class FechaIngreso {
  public value: Date;
  public constructor(value: Date) {
    this.validarFecha(value);
    this.value = value;
  }
  private validarFecha(value: Date): void {
    if (!value)
      throw new InvalidDataException({
        message: 'Fecha Necesaria',
        campo: 'FechaIngreso',
      });
  }
}
