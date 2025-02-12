// PRESTACIONES
// Casos de Uso

import { CreateEmpleado } from '@/src/Empleados/Application/Create/Index';
import { EmpleadoMySQLRepository } from '@/src/Empleados/Infrastructure/DrizzleMySQLRepositoty';
import { CreatePrestacion } from '@/src/Prestacion/Application/Create';
import { DeletePrestacion } from '@/src/Prestacion/Application/Delete';
import { GetAllPrestaciones } from '@/src/Prestacion/Application/GetAll';
import { GetPrestacionById } from '@/src/Prestacion/Application/GetById';
import { UpdatePrestacion } from '@/src/Prestacion/Application/Update';
// Repositories
import { PrestacionMySQLRepository } from '@/src/Prestacion/Infrastructure/DrizzleMySQLRepository';
const PrestacionRepository = new PrestacionMySQLRepository();
const EmpleadoRepository = new EmpleadoMySQLRepository();

export const ServiceContainer = {
  prestaciones: {
    create: new CreatePrestacion(PrestacionRepository),
    getAll: new GetAllPrestaciones(PrestacionRepository),
    getById: new GetPrestacionById(PrestacionRepository),
    update: new UpdatePrestacion(PrestacionRepository),
    delete: new DeletePrestacion(PrestacionRepository),
  },
  Empleado:{
    create: new CreateEmpleado(EmpleadoRepository),
  }
};
