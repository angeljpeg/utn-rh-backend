import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionId {
  public value: number;
  private campo = 'prestacion_id';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El ID de la prestacion es necesario',
        campo: this.campo,
      });

    if (isNaN(value))
      throw new BadRequest({
        message: 'El ID de la prestacion tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
  }

  public static random(): PrestacionId {
    // This method will be replaced by auto-generated ID in the database
    return new PrestacionId(1);
  }
}
