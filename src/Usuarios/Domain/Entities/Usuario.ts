import { UsuarioId } from "./UsuarioId"
import { UsuarioMatricula } from "./UsuarioMatricula"
import { UsuarioPassword } from "./UsuarioPassword"

export class Usuario {
    usuarioId: UsuarioId
    matricula: UsuarioMatricula
    password: UsuarioPassword

    constructor(id: UsuarioId, matricula: UsuarioMatricula, password: UsuarioPassword){
        this.usuarioId = id
        this.matricula = matricula
        this.password = password
    }

    toPrimitive() {}
}