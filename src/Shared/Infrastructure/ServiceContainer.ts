// PRESTACIONES
import { CreatePrestacion } from '@/src/Prestacion/Application/Create';
import { DeletePrestacion } from '@/src/Prestacion/Application/Delete';
import { GetAllPrestaciones } from '@/src/Prestacion/Application/GetAll';
import { GetPrestacionById } from '@/src/Prestacion/Application/GetById';
import { UpdatePrestacion } from '@/src/Prestacion/Application/Update';
import { PrestacionMySQLRepository } from '@/src/Prestacion/Infrastructure/DrizzleMySQLRepository';
const PrestacionRepository = new PrestacionMySQLRepository();

// DESCANSOS
import { CreateDescanso } from '@/src/Descanso/Application/Create';
import { DeleteDescanso } from '@/src/Descanso/Application/Delete';
import { GetAllDescansos } from '@/src/Descanso/Application/GetAll';
import { GetDescansoById } from '@/src/Descanso/Application/GetById';
import { UpdateDescanso } from '@/src/Descanso/Application/Update';
import { DrizzleMySQlDescansoRepository } from '@/src/Descanso/Infrastructure/DrizzleMySQLRepository';
const DescansoRepository = new DrizzleMySQlDescansoRepository();

// EMPLEADOS
import { CreateEmpleado } from '@/src/Empleados/Application/Create/Index';
import { DeleteEmpleado } from '@/src/Empleados/Application/Delete';
import { GetAllEmpleados } from '@/src/Empleados/Application/GetAll';
import { GetEmpleadoById } from '@/src/Empleados/Application/GetById/Index';
import { UpdateEmpleado } from '@/src/Empleados/Application/Update/Index';
import { EmpleadoMySQLRepository } from '@/src/Empleados/Infrastructure/DrizzleMySQLRepositoty';
const EmpleadoRepository = new EmpleadoMySQLRepository();

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
  Empleado:{
    create: new CreateEmpleado(EmpleadoRepository),
    getAll: new GetAllEmpleados(EmpleadoRepository),
    getById: new GetEmpleadoById(EmpleadoRepository),
    update: new UpdateEmpleado(EmpleadoRepository),
    delete: new DeleteEmpleado(EmpleadoRepository),
  }
};
