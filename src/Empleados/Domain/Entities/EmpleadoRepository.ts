import { EmpleadoPrimitive } from '../Interfaces/EmpleadoPrimitive';


export interface EmpleadoRepository {
  create(empleado: EmpleadoPrimitive): Promise<void>;
}
