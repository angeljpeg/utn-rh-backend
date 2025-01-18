import { UsuarioPrimitive } from "../../Domain/Entities/Usuario";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";

export class GetAllUsuarios {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(): Promise<UsuarioPrimitive[]> {
    const usuarios = await this.usuarioRepository.getAll();
    return usuarios.map((usuario) => usuario.toPrimitive());
  }
}
