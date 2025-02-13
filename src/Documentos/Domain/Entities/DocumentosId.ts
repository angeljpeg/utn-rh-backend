import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class DocumentoId {
  public value: number;
  private campo = 'id';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El Id del documento es necesario',
        campo: this.campo,
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'El Id del documento tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }
}
