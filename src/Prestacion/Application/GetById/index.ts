import { PrestacionId } from '../../Domain/Entities/PrestacionId';
import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';
import { PrestacionPrimitive } from '../../Domain/Interfaces/PrestacionPrimitive';

export class GetPrestacionById {
  public constructor(private readonly prestacionRepository: PrestacionRepository) {}

  public async run(id: number): Promise<PrestacionPrimitive | null> {
    const idConvertido = new PrestacionId(id);
    const prestacionEncontrada = await this.prestacionRepository.getById(idConvertido.value);

    return prestacionEncontrada ?? null;
  }
}
