// Usuarios Use Cases
import { CreateUsuario } from '@/src/Usuarios/Application/CreateUsuario/CreateUsuario';
import { GetAllUsuarios } from '@/src/Usuarios/Application/GetAllUsuarios/GetAllUsuarios';
import { GetUsuarioBy } from '@/src/Usuarios/Application/GetUsuarioBy/GetUsuarioBy';
import { GetUsuarioById } from '@/src/Usuarios/Application/GetUsuarioByID/GetUsuarioById';
import { LoginUsuario } from '@/src/Usuarios/Application/LoginUsuario/LoginUsuario';
import { UpdateUsuario } from '@/src/Usuarios/Application/UpdateUsuario.ts/UpdateUsuario';
// Usuarios Repositories
import { InMemoryRepository } from '@/src/Usuarios/Infrastructure/InMemoryRepository';
const UsuarioRepository = new InMemoryRepository();

export const ServiceContainer = {
  usuario: {
    getAll: new GetAllUsuarios(UsuarioRepository),
    create: new CreateUsuario(UsuarioRepository),
    getOneById: new GetUsuarioById(UsuarioRepository),
    getOneBy: new GetUsuarioBy(UsuarioRepository),
    login: new LoginUsuario(UsuarioRepository),
    update: new UpdateUsuario(UsuarioRepository),
  },
};
