import { Usuario } from "../Domain/Entities/Usuario";
import { UsuarioId } from "../Domain/Entities/UsuarioId";
import { UsuarioRepository } from "../Domain/Entities/UsuarioRepository";

export class InMemoryRepository implements UsuarioRepository {
  private usuarios: Usuario[] = [];

  public async create(usuario: Usuario): Promise<void> {
    this.usuarios.push(usuario);
  }

  public async getAll(): Promise<Usuario[]> {
    return this.usuarios;
  }

  public async getById(id: UsuarioId): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.usuarioId.value === id.value)
    return usuario || null;
  }
}
