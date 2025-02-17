import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionMonto {
  public value: number;
  private campo = 'monto_maximo';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El monto es necesario',
        campo: this.campo,
      });

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El Monto Tiene Que Ser Un Numero',
        campo: this.campo,
        data: value,
      });
    }
    if (value < 0) {
      throw new BadRequest({
        message: 'El monto no tiene que ser menor a 0',
        campo: this.campo,
        data: value,
      });
    }
  }
}
