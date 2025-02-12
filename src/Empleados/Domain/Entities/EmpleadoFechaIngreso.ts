import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoFechaIngreso {
  public value: Date;
  
  public constructor(value: Date | string) {
    this.ensureIsValid(value);
    this.value = new Date(value);
  }

  private ensureIsValid(value: Date | string): void {
    if (!value) {
      throw new BadRequest({
        message: 'La fecha de ingreso es requerida',
        campo: 'EmpleadoFechaIngreso',
      });
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new BadRequest({
        message: 'La fecha de ingreso no es válida',
        campo: 'EmpleadoFechaIngreso',
        data: value,
      });
    }

    // Validar que la fecha no sea futura
    if (date > new Date()) {
      throw new BadRequest({
        message: 'La fecha de ingreso no puede ser futura',
        campo: 'EmpleadoFechaIngreso',
        data: value,
      });
    }
  }
}
