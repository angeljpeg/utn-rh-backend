import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionSolicitudId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El numero de la solicitud de prestacion es necesario',
        campo: 'SolicitudId',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El numero de la solicitud de prestacion tiene que ser un numero',
        campo: 'SolicitudId',
        data: value,
      });
    }
  }
}
