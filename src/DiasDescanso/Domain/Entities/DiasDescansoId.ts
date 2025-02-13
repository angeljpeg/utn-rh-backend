import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class DiasDescansoId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El Id del Dia es necesario',
        campo: 'descanso_id',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El Id del Dia tiene que ser un numero',
        campo: 'descanso_id',
        data: value,
      });
    }
  }
}
