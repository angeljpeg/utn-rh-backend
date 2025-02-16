import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { PrestacionSolicitudPrimitive } from '../../Domain/Interfaces/PrestacionSolicitudPrimitive';
import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';

export class GetAllPrestacionSolicitud {
  public constructor(private prestacionSolicitudRepository: PrestacionSolicitudRepository) {}

  public async run(
    query: IQuery<PrestacionSolicitudPrimitive>,
  ): Promise<PrestacionSolicitudPrimitive[]> {
    return await this.prestacionSolicitudRepository.findAll(query);
  }
}
