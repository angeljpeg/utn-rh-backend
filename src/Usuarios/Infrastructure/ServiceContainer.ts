import { CreateUsuario } from "../Application/CreateUsuario/CreateUsuario";

import {InMemoryRepository} from "./InMemoryRepository"

export const ServiceContainer = {
    create: new CreateUsuario(new InMemoryRepository())
}