import { CreateUsuario } from "../Application/CreateUsuario/CreateUsuario";
import { GetAllUsuarios } from "../Application/GetAllUsuarios/GetAllUsuarios";

import { InMemoryRepository } from "./InMemoryRepository";

const UsuarioRepository = new InMemoryRepository();

export const ServiceContainer = {
  create: new CreateUsuario(UsuarioRepository),
  getAll: new GetAllUsuarios(UsuarioRepository),
};
