import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoGenero {
  public value: string;
  public constructor(value: 'M' | 'F') {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: 'M' | 'F'): void {
    if (!value) {
      throw new BadRequest({
        message: 'Favor de Seleccionar un Sexo',
        campo: 'EmpleadoGenero',
      });
    }
    if (value !== 'M' && value !== 'F') {
      throw new BadRequest({
        message: 'Favor de Seleccionar un Sexo que sea Valido Como M o F',
        campo: 'EmpleadoGenero',
        data: value,
      });
    }
  }
}
