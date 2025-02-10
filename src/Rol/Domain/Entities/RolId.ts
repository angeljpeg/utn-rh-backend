import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class RolId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El ID es necesario',
        campo: 'RolId',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El ID tiene que ser un numero',
        campo: 'RolId',
        data: value,
      });
    }
  }
}
