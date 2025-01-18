import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class UsuarioMatricula {
  value: string;

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: string) {
    if (!value)
      throw new InvalidDataException({
        message: "La matricula es necesaria",
        campo: "matricula",
      });

    const matriculaRegex = /^[0-9]{8}$/;
    if (!matriculaRegex.test(value))
      throw new InvalidDataException({
        message: "La matricula debe ser un numero de 8 digitos",
        campo: "matricula",
        data: value,
      });
  }
}
