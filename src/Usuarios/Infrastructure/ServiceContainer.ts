import { CreateUsuario } from "../Application/CreateUsuario/CreateUsuario";
import { GetAllUsuarios } from "../Application/GetAllUsuarios/GetAllUsuarios";

import { InMemoryRepository } from "./InMemoryRepository";

export const ServiceContainer = {
  create: new CreateUsuario(new InMemoryRepository()),
  getAll: new GetAllUsuarios(new InMemoryRepository()),
};
