import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { FRECUENCIAS, FrecuenciaType } from '../Interfaces/Frecuencia';

export class PrestacionFrecuencia {
  public value: string;
  private campo = 'frecuencia';
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: string): void {
    if (!value) {
      throw new BadRequest({
        message: 'Favor de Seleccionar una Frecuencia',
        campo: this.campo,
      });
    }
    if (!FRECUENCIAS.includes(value as FrecuenciaType)) {
      throw new BadRequest({
        message: 'Favor de Seleccionar un Valor que sea Valido Como Unico o Una Vez al Año',
        campo: this.campo,
        data: value,
      });
    }
  }
}
