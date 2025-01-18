import { Usuario } from "./Usuario";
import { UsuarioId } from "./UsuarioId";

export interface UsuarioRepository {
    create(usuario: Usuario): Promise<void>
    getAll(): Promise<Usuario[]>
    getById(id: UsuarioId): Promise<Usuario | null>
}