// Usuarios Use Cases
import { CreateUsuario } from '@/src/Usuarios/Application/CreateUsuario/CreateUsuario';
import { GetAllUsuarios } from '@/src/Usuarios/Application/GetAllUsuarios/GetAllUsuarios';
import { GetUsuarioById } from '@/src/Usuarios/Application/GetUsuarioByID/GetUsuarioById';
// Usuarios Repositories
import { InMemoryRepository } from '@/src/Usuarios/Infrastructure/InMemoryRepository';
const UsuarioRepository = new InMemoryRepository();

export const ServiceContainer = {
  usuario: {
    getAll: new GetAllUsuarios(UsuarioRepository),
    create: new CreateUsuario(UsuarioRepository),
    getOneById: new GetUsuarioById(UsuarioRepository),
  },
};
