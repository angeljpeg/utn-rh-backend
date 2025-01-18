import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class UsuarioId {
  public value: string;

  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string): void {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!value)
      throw new InvalidDataException({
        message: "El ID es necesario",
        campo: "usuarioId",
      });
    if (!uuidRegex.test(value))
      throw new InvalidDataException({
        message: "El ID debe ser un UUID",
        campo: "usuarioId",
        data: value,
      });
  }
}
