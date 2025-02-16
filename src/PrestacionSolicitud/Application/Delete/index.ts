import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';

export class DeletePrestacionSolicitud {
  public constructor(private readonly prestacionSolicitudRepo: PrestacionSolicitudRepository) {}
  public async run(id: number): Promise<void> {
    await this.prestacionSolicitudRepo.findById(id);
    await this.prestacionSolicitudRepo.delete(id);
  }
}
