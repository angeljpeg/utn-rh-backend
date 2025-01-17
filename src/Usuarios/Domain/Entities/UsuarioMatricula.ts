export class UsuarioMatricula {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  private ensureIsValid(value: string) {
    if (!value) throw new Error("La matricula es necesaria");
  }
}
