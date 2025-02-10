import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class PrestacionFrecuencia {
  public value: 'Unico' | 'Una Vez al Año';
  public constructor(value: 'Unico' | 'Una Vez al Año') {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: 'Unico' | 'Una Vez al Año'): void {
    if (!value) {
      throw new InvalidDataException({
        message: 'Favor de Seleccionar una Frecuencia',
        campo: 'PrestacionFrecuencia',
      });
    }
    if (value !== 'Unico' && value !== 'Una Vez al Año') {
      throw new InvalidDataException({
        message: 'Favor de Seleccionar un Valor que sea Valido Como Unico o Una Vez al Año',
        campo: 'PrestacionFrecuencia',
        data: value,
      });
    }
  }
}
