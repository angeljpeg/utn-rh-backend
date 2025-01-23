import { UsuarioId } from '../../Domain/Entities/UsuarioId';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';

export class DeleteUsuario {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(id: string): Promise<void> {
    const usuarioId = new UsuarioId(id);
    await this.usuarioRepository.getById(usuarioId);

    await this.usuarioRepository.delete(usuarioId);
  }
}
