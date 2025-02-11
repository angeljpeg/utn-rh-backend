// PRESTACIONES
// Casos de Uso
import { CreatePrestacion } from '@/src/Prestacion/Application/Create';
import { GetAllPrestaciones } from '@/src/Prestacion/Application/GetAll';
import { GetPrestacionById } from '@/src/Prestacion/Application/GetById';
// Repositories
import { PrestacionMySQLRepository } from '@/src/Prestacion/Infrastructure/DrizzleMySQLRepository';
const PrestacionRepository = new PrestacionMySQLRepository();

export const ServiceContainer = {
  prestaciones: {
    create: new CreatePrestacion(PrestacionRepository),
    getAll: new GetAllPrestaciones(PrestacionRepository),
    getById: new GetPrestacionById(PrestacionRepository),
  },
};
