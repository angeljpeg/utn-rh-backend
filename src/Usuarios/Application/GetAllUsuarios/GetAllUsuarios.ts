import { UsuarioPrimitive } from '../../Domain/Entities/Usuario';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';
import { UsuariosQuery } from '../../Domain/Interfaces/UsuariosQuery';

export class GetAllUsuarios {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(query?: UsuariosQuery): Promise<UsuarioPrimitive[]> {
    const usuarios = await this.usuarioRepository.getAll(query);
    return usuarios.map(usuario => usuario.toPrimitive());
  }
}
