import { UsuarioId } from './UsuarioId';
import { UsuarioMatricula } from './UsuarioMatricula';
import { UsuarioPassword } from './UsuarioPassword';

export class Usuario {
  public usuarioId: UsuarioId;
  public matricula: UsuarioMatricula;
  public password: UsuarioPassword;

  public constructor(id: UsuarioId, matricula: UsuarioMatricula, password: UsuarioPassword) {
    this.usuarioId = id;
    this.matricula = matricula;
    this.password = password;
  }

  public toPrimitive(): UsuarioPrimitive {
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
