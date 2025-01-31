import { Usuario } from '../../Domain/Entities/Usuario';
import { UsuarioGenero } from '../../Domain/Entities/UsuarioGenero';
import { UsuarioId } from '../../Domain/Entities/UsuarioId';
import { UsuarioMatricula } from '../../Domain/Entities/UsuarioMatricula';
import { UsuarioNombre } from '../../Domain/Entities/UsuarioNombre';
import { UsuarioPassword } from '../../Domain/Entities/UsuarioPassword';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';
import { UpdateUsuarioDto } from './UpdateUsuarioDto';

export class UpdateUsuario {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(usuario: UpdateUsuarioDto, id: string): Promise<void> {
    const usuarioId = new UsuarioId(id);
    await this.usuarioRepository.getById(usuarioId);

    const updatedUsuario = new Usuario(
      usuarioId,
      new UsuarioMatricula(usuario.matricula),
      new UsuarioPassword(usuario.password),
      new UsuarioNombre(usuario.nombre),
      new UsuarioGenero(usuario.genero),
    );

    return this.usuarioRepository.update(updatedUsuario);
  }
}
