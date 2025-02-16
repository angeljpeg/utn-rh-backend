import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';
import { PrestacionSolicitudPrimitive } from '../../Domain/Interfaces/PrestacionSolicitudPrimitive';

export class GetByIdPrestacionSolicitud {
  public constructor(private prestacionSolicitudRepository: PrestacionSolicitudRepository) {}

  public async run(id: number): Promise<PrestacionSolicitudPrimitive | null> {
    const prestacionSolicitud = await this.prestacionSolicitudRepository.findById(id);

    if (!prestacionSolicitud) {
      throw new NotFoundException({
        message: `La prestacion solicitud con el id ${id} no fue encontrado`,
        campo: '/:id',
        data: id,
      });
    }

    return prestacionSolicitud;
  }
}
