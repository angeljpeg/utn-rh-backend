import { Usuario } from "../../Domain/Entities/Usuario";
import { UsuarioId } from "../../Domain/Entities/UsuarioId";
import { UsuarioMatricula } from "../../Domain/Entities/UsuarioMatricula";
import { UsuarioPassword } from "../../Domain/Entities/UsuarioPassword";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";
import { CreateUsuarioDto } from "./CreateUsuarioDto";

export class CreateUsuario {
    constructor(private readonly usuarioRepository: UsuarioRepository) { }

    async run(usuario: CreateUsuarioDto): Promise<void> {
        const newUsuario = new Usuario(
            new UsuarioId(usuario.usuarioId),
            new UsuarioMatricula(usuario.matricula),
            new UsuarioPassword(usuario.password)
        );

        return this.usuarioRepository.create(newUsuario);
    }
}
