import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { ESTATUS, EstatusType } from '@/src/Shared/Domain/Interfaces/Estatus';

export class PrestacionSolicitudEstatus {
  public value: string;
  private campo = 'estatus';

  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value) {
      throw new BadRequest({
        message: 'El estatus es necesario',
        campo: this.campo,
      });
    }

    if (!ESTATUS.includes(value as EstatusType)) {
      throw new BadRequest({
        message: 'El Estatus no es un Estatus valido',
        campo: this.campo,
        data: value,
      });
    }
  }
}
