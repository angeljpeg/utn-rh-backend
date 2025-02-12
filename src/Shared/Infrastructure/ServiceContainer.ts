// PRESTACIONES
// Casos de Uso
import { CreatePrestacion } from '@/src/Prestacion/Application/Create';
import { DeletePrestacion } from '@/src/Prestacion/Application/Delete';
import { GetAllPrestaciones } from '@/src/Prestacion/Application/GetAll';
import { GetPrestacionById } from '@/src/Prestacion/Application/GetById';
import { UpdatePrestacion } from '@/src/Prestacion/Application/Update';
// Repositories
import { PrestacionMySQLRepository } from '@/src/Prestacion/Infrastructure/DrizzleMySQLRepository';
const PrestacionRepository = new PrestacionMySQLRepository();

// DESCANSOS
import { CreateDescanso } from '@/src/Descanso/Application/Create';
import { DeleteDescanso } from '@/src/Descanso/Application/Delete';
import { GetAllDescansos } from '@/src/Descanso/Application/GetAll';
import { GetDescansoById } from '@/src/Descanso/Application/GetById';
import { UpdateDescanso } from '@/src/Descanso/Application/Update';
// Repositories
import { DrizzleMySQlDescansoRepository } from '@/src/Descanso/Infrastructure/DrizzleMySQLRepository';
const DescansoRepository = new DrizzleMySQlDescansoRepository();

export const ServiceContainer = {
  prestaciones: {
    create: new CreatePrestacion(PrestacionRepository),
    getAll: new GetAllPrestaciones(PrestacionRepository),
    getById: new GetPrestacionById(PrestacionRepository),
    update: new UpdatePrestacion(PrestacionRepository),
    delete: new DeletePrestacion(PrestacionRepository),
  },
  descansos: {
    create: new CreateDescanso(DescansoRepository),
    getAll: new GetAllDescansos(DescansoRepository),
    getById: new GetDescansoById(DescansoRepository),
    update: new UpdateDescanso(DescansoRepository),
    delete: new DeleteDescanso(DescansoRepository),
  },
};
