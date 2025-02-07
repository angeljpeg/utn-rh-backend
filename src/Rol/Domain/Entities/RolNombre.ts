import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class RolNombre {
  public value: string;
  public constructor(value: string) {
    this.value = value;
  }
  public ensureIsValid(): void {
    if (!this.value)
      throw new InvalidDataException({
        message: 'El Nombre es necesario',
        campo: 'RolNombre',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new InvalidDataException({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: 'RolNombre',
        data: this.value,
      });

    if (this.value.length > 50)
      throw new InvalidDataException({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: 'RolNombre',
        data: this.value,
      });
  }
}
