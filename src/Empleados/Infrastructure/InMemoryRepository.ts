import { Empleado } from '../Domain/Empleado';
import { EmpleadoRepository } from '../Domain/EmpleadoRepository';

export class InMemoryEmpleadoRepository implements EmpleadoRepository {
  public empleados: Empleado[] = [];
  public async create(empleado: Empleado): Promise<void> {
    this.empleados.push(empleado);
  }

  public async getAll(): Promise<Empleado[]> {
    return this.empleados;
  }
}
