import { Descanso } from '../../Domain/Entities/Descanso';
import { DescasnoDescripcion } from '../../Domain/Entities/DescansoDescripcion';
import { DescansoId } from '../../Domain/Entities/DescansoId';
import { DescansoNombre } from '../../Domain/Entities/DescansoNombre';
import { DescansoRepository } from '../../Domain/Entities/DescansoRepository';
import { CreateDescansoDto } from '../../Domain/Interface/CreateDescansoDto';

export class CreateDescanso {
  public constructor(private readonly descansoRepo: DescansoRepository) {}

  public async run({ id, descripcion, nombre }: CreateDescansoDto): Promise<void> {
    const nuevoDescanso = new Descanso(
      id ? new DescansoId(id) : DescansoId.autoGenerate(),
      new DescansoNombre(nombre),
      new DescasnoDescripcion(descripcion),
    );

    await this.descansoRepo.create(nuevoDescanso.toPrimitive());
  }
}
