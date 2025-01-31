import { Empleado } from '../Domain/Empleado';
import { EmpleadoID } from '../Domain/EmpleadoId';
import { EmpleadoRepository } from '../Domain/EmpleadoRepository';

export class InMemoryEmpleadosRepository implements EmpleadoRepository {
  public empleados: Empleado[] = [];

  public async create(empleado: Empleado): Promise<void> {
    this.empleados.push(empleado);
  }

  public async getAll(): Promise<Empleado[]> {
    return this.empleados;
  }

  public async getById(id: EmpleadoID): Promise<Empleado | null> {
    const index = this.empleados.findIndex(e => e.empleadoId.value === id.value);

    return this.empleados[index] || null;
  }

  public async getOneBy(campo: string, value: string): Promise<Empleado | null> {
    if (
      campo !== 'noEmpleado' &&
      campo !== 'empleadoId' &&
      campo !== 'nombreEmpleado' &&
      campo !== 'fechaIngreso'
    ) {
      throw new Error('campo invalido');
    }
    const empleado = this.empleados.find(e => e[campo].value.toString() === value) || null;

    return empleado;
  }

  public async update(empleado: Empleado): Promise<void> {
    const index = this.empleados.findIndex(e => e.empleadoId.value === empleado.empleadoId.value);
    this.empleados[index] = empleado;
  }

  public async delete(id: EmpleadoID): Promise<void> {
    this.empleados.filter(e => e.empleadoId.value !== id.value);
  }
}
