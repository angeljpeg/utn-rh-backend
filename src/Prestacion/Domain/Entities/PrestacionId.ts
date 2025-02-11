import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El ID es necesario',
        campo: 'PrestacionId',
      });

    if (isNaN(value))
      throw new BadRequest({
        message: 'El ID tiene que ser un numero',
        campo: 'PrestacionId',
        data: value,
      });
  }

  public static random(): PrestacionId {
    // This method will be replaced by auto-generated ID in the database
    return new PrestacionId(1);
  }
}
