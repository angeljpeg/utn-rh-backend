// USUARIOS
// Casos de Uso
import { CreateUsuario } from '@/src/Usuarios/Application/CreateUsuario/CreateUsuario';
import { DeleteUsuario } from '@/src/Usuarios/Application/DeleteUsuario/DeleteUsuario';
import { GetAllUsuarios } from '@/src/Usuarios/Application/GetAllUsuarios/GetAllUsuarios';
import { GetUsuarioBy } from '@/src/Usuarios/Application/GetUsuarioBy/GetUsuarioBy';
import { GetUsuarioById } from '@/src/Usuarios/Application/GetUsuarioByID/GetUsuarioById';
import { LoginUsuario } from '@/src/Usuarios/Application/LoginUsuario/LoginUsuario';
import { UpdateUsuario } from '@/src/Usuarios/Application/UpdateUsuario.ts/UpdateUsuario';
import { InMemoryRepository } from '@/src/Usuarios/Infrastructure/InMemoryRepository';
// Repositories
//import { DrizzleMySQLRepository } from '@/src/Usuarios/Infrastructure/DrizzleMySQLRepository';
const UsuarioRepository = new InMemoryRepository();

// EMPLEADOS

export const ServiceContainer = {
  usuario: {
    getAll: new GetAllUsuarios(UsuarioRepository),
    create: new CreateUsuario(UsuarioRepository),
    getOneById: new GetUsuarioById(UsuarioRepository),
    getOneBy: new GetUsuarioBy(UsuarioRepository),
    login: new LoginUsuario(UsuarioRepository),
    update: new UpdateUsuario(UsuarioRepository),
    delete: new DeleteUsuario(UsuarioRepository),
  },
  empleado: {},
};
