import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { NIVEL_EDUCATIVO, NivelEducativoType } from '../Interface/NivelEducativo';

export class BeneficiarioNivelEducativo {
  public value: string;
  private campo = 'nivel_educativo';
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El Nivel Educativo es necesario',
        campo: this.campo,
        data: value,
      });

    if (!NIVEL_EDUCATIVO.includes(value as NivelEducativoType)) {
      throw new BadRequest({
        message: 'El Nivel Educativo es inválido',
        campo: this.campo,
        data: value,
      });
    }
  }
}
