import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { ESTATUS, EstatusType } from '@/src/Shared/Domain/Interfaces/Estatus';

export class DescansoSolicitudEstatus {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El estatus es necesario',
        campo: 'DescansoSolicitudEstatus',
      });

    if (!ESTATUS.includes(value as EstatusType)) {
      throw new BadRequest({
        message: 'El estatus tiene que ser un estatus valido',
        campo: 'DescansoSolicitudEstatus',
        data: value,
      });
    }
  }
}
