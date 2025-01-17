import { Usuario } from "../Domain/Entities/Usuario";
import { UsuarioRepository } from "../Domain/Entities/UsuarioRepository";

export class InMemoryRepository implements UsuarioRepository {
    private usuarios: Usuario[] = []

    async create(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario)
    }

    async getAll(): Promise<Usuario[]> {
        console.log(this.usuarios)
        return this.usuarios
    }
}