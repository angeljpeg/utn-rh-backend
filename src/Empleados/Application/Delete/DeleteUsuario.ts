import { EmpleadoID } from '../../Domain/EmpleadoId';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';

export class DeleteUsuario {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(id: EmpleadoID): Promise<void> {
    await this.empleadoRepository.getById(id);
    await this.empleadoRepository.delete(id);
  }
}
