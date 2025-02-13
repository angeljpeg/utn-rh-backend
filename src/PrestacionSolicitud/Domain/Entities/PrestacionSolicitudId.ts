import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionSolicitudId {
  public value: number;
  private campo = 'solicitud_id';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El numero de la solicitud de prestacion es necesario',
        campo: this.campo,
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El numero de la solicitud de prestacion tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
