import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class UsuarioPassword {
  value: string;

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string) {
    if (!value)
      throw new InvalidDataException({
        message: "El password es necesario",
        campo: "password",
      });
  }
}
