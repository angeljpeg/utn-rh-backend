import { UsuarioId } from "./UsuarioId";
import { UsuarioMatricula } from "./UsuarioMatricula";
import { UsuarioPassword } from "./UsuarioPassword";

export class Usuario {
  usuarioId: UsuarioId;
  matricula: UsuarioMatricula;
  password: UsuarioPassword;

  constructor(
    id: UsuarioId,
    matricula: UsuarioMatricula,
    password: UsuarioPassword
  ) {
    this.usuarioId = id;
    this.matricula = matricula;
    this.password = password;
  }

  toPrimitive() {
    return {
      usuarioId: this.usuarioId.value,
      matricula: this.matricula.value,
      password: this.password.value,
    };
  }
}

export type UsuarioPrimitive = {
  usuarioId: string;
  matricula: string;
  password: string;
};
