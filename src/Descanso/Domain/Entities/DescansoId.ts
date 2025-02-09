import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class DescansoId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El ID es necesario',
        campo: 'DescansoId',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'El ID tiene que ser un numero',
        campo: 'DescansoId',
        data: value,
      });
    }
  }
}
