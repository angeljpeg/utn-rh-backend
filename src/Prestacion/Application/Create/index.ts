import { Prestacion } from '../../Domain/Entities/Prestacion';
import { PrestacionAntiguedadMinima } from '../../Domain/Entities/PrestacionAntiguedadMinima';
import { PrestacionDescripcion } from '../../Domain/Entities/PrestacionDescripcion';
import { PrestacionFrecuencia } from '../../Domain/Entities/PrestacionFrecuencia';
import { PrestacionId } from '../../Domain/Entities/PrestacionId';
import { PrestacionMonto } from '../../Domain/Entities/PrestacionMonto';
import { PrestacionNombre } from '../../Domain/Entities/PrestacionNombre';
import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';
import { PrestacionRequisitos } from '../../Domain/Entities/PrestacionRequisitos';
import { PrestacionCreateDto } from '../../Domain/Interfaces/PrestacionCreateDto';

export class CreatePrestacion {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}

  public async run({
    antiguedad_minima,
    descripcion,
    frecuencia,
    id,
    monto_maximo,
    nombre,
    requisitos,
  }: PrestacionCreateDto): Promise<void> {
    const nuevaPrestacion = new Prestacion(
      id ? new PrestacionId(id) : PrestacionId.random(),
      new PrestacionNombre(nombre),
      new PrestacionDescripcion(descripcion),
      new PrestacionMonto(Number(monto_maximo)),
      new PrestacionFrecuencia(frecuencia),
      new PrestacionRequisitos(requisitos),
      new PrestacionAntiguedadMinima(Number(antiguedad_minima)),
    );
    await this.prestacionRepo.create(nuevaPrestacion.toPrestacionPrimitive());
  }
}
