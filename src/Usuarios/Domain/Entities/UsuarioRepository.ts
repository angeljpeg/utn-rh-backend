import { Usuario } from "./Usuario";

export interface UsuarioRepository {
    create(usuario: Usuario): Promise<void>
}