import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoNumero {
  public value: number;

  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El numero de empleado es necesario',
        campo: 'NumeroEmpleado',
      });

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El numero de empleado tiene que ser un numero',
        campo: 'NumeroEmpleado',
        data: value,
      });
    }
  }
  public static random(): EmpleadoNumero {
    // This method will be replaced by auto-generated ID in the database
    return new EmpleadoNumero(1);
  }
}
