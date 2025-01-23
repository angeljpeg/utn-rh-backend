import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';
import { Usuario } from '../Domain/Entities/Usuario';
import { UsuarioId } from '../Domain/Entities/UsuarioId';
import { UsuarioRepository } from '../Domain/Entities/UsuarioRepository';

export class InMemoryRepository implements UsuarioRepository {
  private usuarios: Usuario[] = [];

  public async create(usuario: Usuario): Promise<void> {
    this.usuarios.push(usuario);
  }

  public async getAll(): Promise<Usuario[]> {
    return this.usuarios;
  }

  public async getById(id: UsuarioId): Promise<Usuario | null> {
    const usuario = this.usuarios.find(u => u.usuarioId.value === id.value);
    return usuario || null;
  }

  public async getOneBy(campo: string, value: string): Promise<Usuario | null> {
    if (campo !== 'matricula' && campo !== 'usuarioId')
      throw new InvalidDataException({ message: 'Campo no valido', campo, data: value });

    const usuario = this.usuarios.find(u => u[campo].value === value);
    return usuario || null;
  }

  public async update(usuario: Usuario): Promise<void> {
    const index = this.usuarios.findIndex(u => u.usuarioId.value === usuario.usuarioId.value);

    if (index === -1) {
      throw new Error('Usuario no encontrado.');
    }

    this.usuarios[index] = usuario;
  }

  public async login(matricula: string, password: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find(
      u => u.matricula.value === matricula && u.password.value === password,
    );
    return usuario || null;
  }
}
