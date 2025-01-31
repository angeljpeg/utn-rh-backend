import { Usuario } from '../../Domain/Entities/Usuario';
import { UsuarioGenero } from '../../Domain/Entities/UsuarioGenero';
import { UsuarioId } from '../../Domain/Entities/UsuarioId';
import { UsuarioMatricula } from '../../Domain/Entities/UsuarioMatricula';
import { UsuarioNombre } from '../../Domain/Entities/UsuarioNombre';
import { UsuarioPassword } from '../../Domain/Entities/UsuarioPassword';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';
import { CreateUsuarioDto } from './CreateUsuarioDto';

export class CreateUsuario {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(usuario: CreateUsuarioDto): Promise<void> {
    const newUsuario = new Usuario(
      new UsuarioId(usuario.usuarioId),
      new UsuarioMatricula(usuario.matricula),
      new UsuarioPassword(usuario.password),
      new UsuarioNombre(usuario.nombre),
      new UsuarioGenero(usuario.genero),
    );

    return this.usuarioRepository.create(newUsuario);
  }
}
