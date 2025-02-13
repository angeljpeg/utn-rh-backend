import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoGenero {
  public value: string;
  private campo = 'genero';
  public constructor(value: 'M' | 'F') {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: 'M' | 'F'): void {
    if (!value) {
      throw new BadRequest({
        message: 'Favor de Seleccionar un Sexo',
        campo: this.campo,
      });
    }
    if (value !== 'M' && value !== 'F') {
      throw new BadRequest({
        message: 'Favor de Seleccionar un Sexo que sea Valido Como M o F',
        campo: this.campo,
        data: value,
      });
    }
  }
}
