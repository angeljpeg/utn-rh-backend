import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { Parentesco, PARENTESCOS } from '../Interface/Parentesco';

export class BeneficiariosParentesco {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El parentesco es necesario',
        campo: 'BeneficiariosParentesco',
        data: value,
      });

    if (!PARENTESCOS.includes(value as Parentesco)) {
      throw new BadRequest({
        message: 'El parentesco es inválido',
        campo: 'BeneficiariosParentesco',
        data: value,
      });
    }
  }
}
