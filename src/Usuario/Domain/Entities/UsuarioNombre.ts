import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class UsuarioNombre {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El Nombre es necesario',
        campo: 'UsuarioNombre',
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: 'UsuarioNombre',
        data: value,
      });

    if (this.value.length > 50)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: 'UsuarioNombre',
        data: this.value,
      });
  }
}
