import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class UsuarioNombre {
  public value: string;

  public constructor(nombre: string) {
    this.value = nombre;
  }

  public ensureIsValid(): void {
    if (!this.value)
      throw new InvalidDataException({
        message: 'El Nombre es necesario',
        campo: 'nombre',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new InvalidDataException({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: 'nombre',
        data: this.value,
      });

    if (this.value.length > 50)
      throw new InvalidDataException({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: 'nombre',
        data: this.value,
      });
  }
}
