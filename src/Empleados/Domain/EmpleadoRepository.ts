import { Empleado } from './Empleado';
import { EmpleadoID } from './EmpleadoId';

export interface EmpleadoRepository {
  create(empleado: Empleado): Promise<void>;
  getAll(): Promise<Empleado[]>;
  getBy(campo: string, value: string): Promise<Empleado[]>;
  getById(id: EmpleadoID): Promise<Empleado | null>;
  getOneBy(campo: string, value: string): Promise<Empleado | null>;
  update(empleado: Empleado): Promise<void>;
  delete(id: EmpleadoID): Promise<void>;
}
