import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class DiasDescansoId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El Id del Dia es necesario',
        campo: 'DiasDescansoId',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'El Id del Dia tiene que ser un numero',
        campo: 'DiasDescansoId',
        data: value,
      });
    }
  }
}
