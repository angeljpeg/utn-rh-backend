import { Usuario } from "../../Domain/Entities/Usuario";
import { UsuarioId } from "../../Domain/Entities/UsuarioId";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";

export class GetUsuarioById {
  constructor(private readonly usuarioReposository: UsuarioRepository) {}

  async run(id: string): Promise<Usuario | null> {
    const usuarioId = new UsuarioId(id);
    return this.usuarioReposository.getById(usuarioId);
  }
}
