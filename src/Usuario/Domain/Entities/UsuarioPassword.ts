import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class UsuarioPassword {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El password es necesario',
        campo: 'UsuarioPassword',
        data: value,
      });
  }
}
