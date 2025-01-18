import { InvalidDataException } from "../Exceptions/InvalidDataException";

export class UsuarioId {
  value: string;

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string) {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!value) throw new InvalidDataException("El ID es necesario");
    if (!uuidRegex.test(value)) throw new InvalidDataException("El ID debe ser un UUID");
  }
}
