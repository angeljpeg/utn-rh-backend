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

// Parentescos
import { DrizzleParentescoRepository } from '@/src/Parentesco/Infrastructure/DrizzleMySQLRepository';
import { CreateParentesco } from '@/src/Parentesco/Application/Create/Index';
import { GetAllParentesco } from '@/src/Parentesco/Application/GetAll/Index';
import { GetParentescoById } from '@/src/Parentesco/Application/GetById/Index';
import { UpdateParentesco } from '@/src/Parentesco/Application/Update/Index';
import { DeleteParentesco } from '@/src/Parentesco/Application/Delete/Index';
const ParentescoRepository = new DrizzleParentescoRepository();

// Beneficiarios
import { BeneficiarioSQLRepository } from '@/src/Beneficiarios/Infrastructure/DrizzleMySQLRepository';
import { CreateBeneficiario } from '@/src/Beneficiarios/Application/Create';
import { GetAllBeneficiarios } from '@/src/Beneficiarios/Application/GetAll';
import { GetBeneficiarioById } from '@/src/Beneficiarios/Application/GetById';
import { UpdateBeneficiario } from '@/src/Beneficiarios/Application/Update';
import { DeleteBeneficiario } from '@/src/Beneficiarios/Application/Delete';
const BeneficiarioRepository = new BeneficiarioSQLRepository();

// Solicitud Prestaciones
import { DrizzleMySQLPrestacionSolicitudRepository } from '@/src/PrestacionSolicitud/Infrastructure/DrizzleMySQLRepository';
import { CreatePrestacionSolicitud } from '@/src/PrestacionSolicitud/Application/Create';
import { GetAllPrestacionSolicitud } from '@/src/PrestacionSolicitud/Application/GetAll';
import { GetPrestacionSolicitudById } from '@/src/PrestacionSolicitud/Application/GetById';
import { UpdatePrestacionSolicitud } from '@/src/PrestacionSolicitud/Application/Update';
import { DeletePrestacionSolicitud } from '@/src/PrestacionSolicitud/Application/Delete';
const PrestacionSolicitudRepository = new DrizzleMySQLPrestacionSolicitudRepository();

// Dias Descanso
import { CreateDiasDescanso } from '@/src/DiasDescanso/Application/Create';
import { DeleteDiasDescanso } from '@/src/DiasDescanso/Application/Delete';
import { GetAllDiasDescanso } from '@/src/DiasDescanso/Application/GetAll';
import { GetDiasDescansoById } from '@/src/DiasDescanso/Application/GetById';
import { UpdateDiasDescanso } from '@/src/DiasDescanso/Application/Update';
import { DrizzleMySQLRepository } from '@/src/DiasDescanso/Infrastructure/DrizzleMySQLRepositoty';
const DiasDescansoRepository = new DrizzleMySQLRepository();

export const ServiceContainer = {
  Prestaciones: {
    create: new CreatePrestacion(PrestacionRepository),
    getAll: new GetAllPrestaciones(PrestacionRepository),
    getById: new GetPrestacionById(PrestacionRepository),
    update: new UpdatePrestacion(PrestacionRepository),
    delete: new DeletePrestacion(PrestacionRepository),
  },
  Descansos: {
    create: new CreateDescanso(DescansoRepository),
    getAll: new GetAllDescansos(DescansoRepository),
    getById: new GetDescansoById(DescansoRepository),
    update: new UpdateDescanso(DescansoRepository),
    delete: new DeleteDescanso(DescansoRepository),
  },
  Empleado: {
    create: new CreateEmpleado(EmpleadoRepository),
    getAll: new GetAllEmpleados(EmpleadoRepository),
    getById: new GetEmpleadoById(EmpleadoRepository),
    update: new UpdateEmpleado(EmpleadoRepository),
    delete: new DeleteEmpleado(EmpleadoRepository),
  },
  Parentesco: {
    create: new CreateParentesco(ParentescoRepository),
    getAll: new GetAllParentesco(ParentescoRepository),
    getById: new GetParentescoById(ParentescoRepository),
    update: new UpdateParentesco(ParentescoRepository),
    delete: new DeleteParentesco(ParentescoRepository),
  },
  Beneficiarios: {
    create: new CreateBeneficiario(
      BeneficiarioRepository,
      EmpleadoRepository,
      ParentescoRepository,
    ),
    getAll: new GetAllBeneficiarios(BeneficiarioRepository),
    getById: new GetBeneficiarioById(BeneficiarioRepository),
    update: new UpdateBeneficiario(
      BeneficiarioRepository,
      ParentescoRepository,
      EmpleadoRepository,
    ),
    delete: new DeleteBeneficiario(BeneficiarioRepository),
  },
  SolicitudesPrestaciones: {
    create: new CreatePrestacionSolicitud(
      PrestacionSolicitudRepository,
      PrestacionRepository,
      EmpleadoRepository,
    ),
    getAll: new GetAllPrestacionSolicitud(PrestacionSolicitudRepository),
    getById: new GetPrestacionSolicitudById(PrestacionSolicitudRepository),
    update: new UpdatePrestacionSolicitud(
      PrestacionSolicitudRepository,
      PrestacionRepository,
      EmpleadoRepository,
    ),
    delete: new DeletePrestacionSolicitud(PrestacionSolicitudRepository),
  },
  DiasDescanso: {
    create: new CreateDiasDescanso(DiasDescansoRepository, DescansoRepository),
    getAll: new GetAllDiasDescanso(DiasDescansoRepository),
    getById: new GetDiasDescansoById(DiasDescansoRepository),
    update: new UpdateDiasDescanso(DiasDescansoRepository, DescansoRepository),
    delete: new DeleteDiasDescanso(DiasDescansoRepository),
  },
};
