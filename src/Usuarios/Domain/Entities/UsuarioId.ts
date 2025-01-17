export class UsuarioId {
  value: string;

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string) {
    if (!value) throw new Error("El ID es necesario");
  }
}
