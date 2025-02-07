import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class PrestacionMonto {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El monto es necesario',
        campo: 'PrestacionMonto',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'El Monto Tiene Que Ser Un Numero',
        campo: 'PrestacionMonto',
        data: value,
      });
    }
    if (value < 0) {
      throw new InvalidDataException({
        message: 'El monto no tiene que ser menor a 0',
        campo: 'PrestacionMonto',
        data: value,
      });
    }
  }
}
