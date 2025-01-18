import { UsuarioPrimitive } from "../../Domain/Entities/Usuario";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";

export class GetAllUsuarios {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async run(): Promise<UsuarioPrimitive[]> {
    const usuarios = await this.usuarioRepository.getAll();
    return usuarios.map((usuario) => usuario.toPrimitive());
  }
}
