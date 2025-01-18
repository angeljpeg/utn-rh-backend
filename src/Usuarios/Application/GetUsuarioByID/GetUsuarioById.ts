import { UsuarioPrimitive } from "../../Domain/Entities/Usuario";
import { UsuarioId } from "../../Domain/Entities/UsuarioId";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";
import { NotFoundException } from "../../Domain/Exceptions/NotFoundException";

export class GetUsuarioById {
  constructor(private readonly usuarioReposository: UsuarioRepository) {}

  async run(id: string): Promise<UsuarioPrimitive | null> {
    const usuarioId = new UsuarioId(id);
    const usuario = await this.usuarioReposository.getById(usuarioId);
    if (!usuario) throw new NotFoundException("Usuario no encontrado");
    return usuario.toPrimitive();
  }
}
