import { DiasDescansoRepository } from '../../Domain/Entities/DiasDescansoRepository';
import { DiasDescansoPrimitive } from '../../Domain/Interface/DiasDescansoPrimitive';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';

export class GetAllDiasDescanso {
  public constructor(private readonly diasDescansoRepository: DiasDescansoRepository) {}

  public async run(query: IQuery<DiasDescansoPrimitive>): Promise<DiasDescansoPrimitive[]> {
    return await this.diasDescansoRepository.getAll(query);
  }
}
