import { Usuario } from "../../Domain/Entities/Usuario";
import { UsuarioRepository } from "../../Domain/Entities/UsuarioRepository";

export class GetAllUsuarios {
    constructor(private readonly usuarioRepository: UsuarioRepository){}

    async run(): Promise<Usuario[]> {
        return this.usuarioRepository.getAll()
    }
}