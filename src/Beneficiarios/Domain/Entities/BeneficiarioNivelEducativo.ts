import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { NIVEL_EDUCATIVO, NivelEducativo } from '../Interface/NivelEducativo';

export class BeneficiarioNivelEducativo {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El Nivel Educativo es necesario',
        campo: 'BeneficiarioNivelEducativo',
        data: value,
      });

    if (!NIVEL_EDUCATIVO.includes(value as NivelEducativo)) {
      throw new BadRequest({
        message: 'El Nivel Educativo es inválido',
        campo: 'BeneficiarioNivelEducativo',
        data: value,
      });
    }
  }
}
