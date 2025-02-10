import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class BeneficiarioId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El ID es necesario',
        campo: 'BeneficiarioId',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'El ID tiene que ser un numero',
        campo: 'BeneficiarioId',
        data: value,
      });
    }
  }
}
