export class UsuarioPassword {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  private ensureIsValid(value: string) {
    if (!value) throw new Error("El password es necesario");
  }
}
