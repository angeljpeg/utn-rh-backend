import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class UsuarioPassword {
  public value: string;
  
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    if (!value)
      throw new InvalidDataException({
        message: "El password es necesario",
        campo: "password",
      });
  }
}
