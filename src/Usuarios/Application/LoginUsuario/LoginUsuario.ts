import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';
import { UsuarioPrimitive } from '../../Domain/Entities/Usuario';
import { UsuarioRepository } from '../../Domain/Entities/UsuarioRepository';

export class LoginUsuario {
  public constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async run(matricula: string, password: string): Promise<UsuarioPrimitive> {
    const usuario = await this.usuarioRepository.getOneBy('matricula', matricula);

    if (!usuario) {
      throw new InvalidDataException({
        message: 'Credenciales inválidas',
        campo: 'matricula',
        data: 'matricula no existente',
      });
    }

    const isPasswordValid = usuario.password.value === password;

    if (!isPasswordValid) {
      throw new InvalidDataException({
        message: 'Credenciales inválidas',
        campo: 'password',
        data: 'contraseña incorrectos',
      });
    }

    return usuario.toPrimitive();
  }
}
