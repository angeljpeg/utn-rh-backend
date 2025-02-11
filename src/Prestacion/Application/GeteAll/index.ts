import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';
import { PrestacionPrimitive } from '../../Domain/Interfaces/PrestacionPrimitive';

export class GetAllPrestaciones {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}

  public async run(query: IQuery): Promise<PrestacionPrimitive[]> {
    const prestaciones = await this.prestacionRepo.getAll(query);

    return prestaciones;
  }
}
