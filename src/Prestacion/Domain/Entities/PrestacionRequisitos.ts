import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionRequisitos {
  public value: string;
  private campo = 'requisitos';
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El requisito de la prestacion es nesecario',
        campo: this.campo,
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'El requisito debe ser al menos 3 caracteres',
        campo: this.campo,
        data: value,
      });

    if (value.length > 500)
      throw new BadRequest({
        message: 'El requisito debe ser al menos 500 caracteres',
        campo: this.campo,
        data: value,
      });
  }
}
