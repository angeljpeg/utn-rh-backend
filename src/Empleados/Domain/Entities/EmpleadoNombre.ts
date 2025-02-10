import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class EmpleadoNombre {
  public value: string;

  public constructor(value: string) {
    this.value = value;
  }
  public ensureIsValid(): void {
    if (!this.value)
      throw new BadRequest({
        message: 'El Nombre es necesario',
        campo: 'EmpleadoNombre',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: 'EmpleadoNombre',
        data: this.value,
      });

    if (this.value.length > 50)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: 'EmpleadoNombre',
        data: this.value,
      });
  }
}
