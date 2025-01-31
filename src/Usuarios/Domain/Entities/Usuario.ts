import { UsuarioGenero } from './UsuarioGenero';
import { UsuarioId } from './UsuarioId';
import { UsuarioMatricula } from './UsuarioMatricula';
import { UsuarioNombre } from './UsuarioNombre';
import { UsuarioPassword } from './UsuarioPassword';

export class Usuario {
  public usuarioId: UsuarioId;
  public matricula: UsuarioMatricula;
  public password: UsuarioPassword;
  public nombre: UsuarioNombre;
  public genero: UsuarioGenero;

  public constructor(
    id: UsuarioId,
    matricula: UsuarioMatricula,
    password: UsuarioPassword,
    nombre: UsuarioNombre,
    genero: UsuarioGenero,
  ) {
    this.usuarioId = id;
    this.matricula = matricula;
    this.password = password;
    this.nombre = nombre;
    this.genero = genero;
  }

  public toPrimitive(): UsuarioPrimitive {
    return {
      usuarioId: this.usuarioId.value,
      matricula: this.matricula.value,
      password: this.password.value,
      nombre: this.nombre.value,
      genero: this.genero.value,
    };
  }
}

export type UsuarioPrimitive = {
  usuarioId: string;
  matricula: string;
  password: string;
  nombre: string;
  genero: string;
};
