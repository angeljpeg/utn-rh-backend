import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { DescansoRepository } from '../../Domain/Entities/DescansoRepository';
import { DescansoPrimitive } from '../../Domain/Interface/DescansoPrimitive';

export class GetAllDescansos {
  public constructor(private readonly descansoRepo: DescansoRepository) {}

  public async run(query: IQuery<DescansoPrimitive>): Promise<DescansoPrimitive[]> {
    return await this.descansoRepo.getAll(query);
  }
}
