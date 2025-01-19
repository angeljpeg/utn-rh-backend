import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFoundException';
import { UsuarioPrimitive } from '../../Domain/Entities/Usuario';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';

export class GetUsuarioBy {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(campo: string, value: string): Promise<UsuarioPrimitive | null> {
    const usuario = await this.usuarioRepository.getOneBy(campo, value);

    if (!usuario)
      throw new NotFoundException({ message: 'Usuario no encontrado', campo, data: value });

    return usuario?.toPrimitive() || null;
  }
}
