import { UsuariosQuery } from '../Interfaces/UsuariosQuery';
import { Usuario } from './Usuario';
import { UsuarioId } from './UsuarioId';

export interface UsuarioRepository {
  create(usuario: Usuario): Promise<void>;
  getAll(query: UsuariosQuery): Promise<Usuario[]>;
  getById(id: UsuarioId): Promise<Usuario | null>;
  getOneBy(campo: string, value: string): Promise<Usuario | null>;
  update(usuario: Usuario): Promise<void>;
  delete(id: UsuarioId): Promise<void>;
  login(matricula: string, password: string): Promise<Usuario | null>;
}
