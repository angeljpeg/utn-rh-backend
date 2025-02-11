import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionDescripcion {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'La escripcion de la prestacion es nesecario',
        campo: 'descripcion',
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'La descripcion  debe ser al menos 3 caracteres',
        campo: 'descripcion',
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'La descripcion  debe ser al menos 3 caracteres',
        campo: 'descripcion',
        data: value,
      });

    if (value.length > 500)
      throw new BadRequest({
        message: 'La descripcion debe ser al menos 500 caracteres',
        campo: 'descripcion',
        data: value,
      });
  }
}
