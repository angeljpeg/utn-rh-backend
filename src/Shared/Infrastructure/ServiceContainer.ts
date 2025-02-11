// PRESTACIONES
// Casos de Uso
import { CreatePrestacion } from '@/src/Prestacion/Application/Create';
import { GetAllPrestaciones } from '@/src/Prestacion/Application/GeteAll';
// Repositories
import { PrestacionMySQLRepository } from '@/src/Prestacion/Infrastructure/DrizzleMySQLRepository';
const PrestacionRepository = new PrestacionMySQLRepository();

export const ServiceContainer = {
  prestaciones: {
    create: new CreatePrestacion(PrestacionRepository),
    getAll: new GetAllPrestaciones(PrestacionRepository),
  },
};
