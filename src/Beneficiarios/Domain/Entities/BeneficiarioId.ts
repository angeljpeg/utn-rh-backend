import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class BeneficiarioId {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El ID es necesario',
        campo: 'BeneficiarioId',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El ID tiene que ser un numero',
        campo: 'BeneficiarioId',
        data: value,
      });
    }
  }

  public static random(): BeneficiarioId {
    return new BeneficiarioId(Math.floor(Math.random() * 100));
  }
}
