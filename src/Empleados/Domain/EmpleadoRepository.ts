import { Empleado } from './Empleado';
import { EmpleadoID } from './EmpleadoId';

export interface EmpleadoRepository {
  create(Empleado: Empleado): Promise<void>;
  getAll(): Promise<Empleado[]>;
  getById(id: EmpleadoID): Promise<Empleado | null>;
  getOneBy(campo: string, value: string): Promise<Empleado | null>;
  update(Empleado: Empleado): Promise<void>;
  delete(id: EmpleadoID): Promise<void>;
}
