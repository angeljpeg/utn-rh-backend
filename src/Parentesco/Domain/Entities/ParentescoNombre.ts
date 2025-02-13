import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class ParentescoNombre {
  public value: string;
  private campo = 'ParentescoNombre';

  public constructor(value: string) {
    this.value = value;
    this.ensureIsValid(value);
  }
  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El Nombre es necesario',
        campo: this.campo,
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: this.campo,
        data: value,
      });

    if (value.length > 50)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: this.campo,
        data: value,
      });
  }
}
