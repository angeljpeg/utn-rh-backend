import { PeriodoVacacionalPrimitive } from '../Interfaces/PeriodoVacionalPrimitive';
import { PeriodoVacacionalAnio } from './PeriodoVacacionalAnio';
import { PeriodoVacacionalDiasPendientes } from './PeriodovacacionalDiasPendientes';
import { PeriodoVacacionalDiasTomados } from './PeriodoVacacionalDiasTomados';
import { PeriodoVacacionalId } from './PeriodoVacacionalId';
import { PeriodoVacacionalDiasDisponibles } from './PeriodovacacionalDiasDisponibles';

export class PeriodoVacacional {
  public PeriodoVacacionalId: PeriodoVacacionalId;
  public Anio: PeriodoVacacionalAnio;
  public DiasDisponibles: PeriodoVacacionalDiasDisponibles;
  public DiasTomados: PeriodoVacacionalDiasTomados;
  public DiasPendientes: PeriodoVacacionalDiasPendientes;

  public constructor(
    anio: number,
    diasDisponibles: number,
    diasTomados: number,
    diasPendientes: number,
    id?: number,
  ) {
    this.PeriodoVacacionalId = id ? new PeriodoVacacionalId(id) : PeriodoVacacionalId.random();
    this.Anio = new PeriodoVacacionalAnio(anio);
    this.DiasDisponibles = new PeriodoVacacionalDiasDisponibles(diasDisponibles);
    this.DiasTomados = new PeriodoVacacionalDiasTomados(diasTomados);
    this.DiasPendientes = new PeriodoVacacionalDiasPendientes(diasPendientes);
  }

  public toPrimitive(): PeriodoVacacionalPrimitive {
    return {
      periodo_vacacional_id: this.PeriodoVacacionalId.value,
      anio: this.Anio.value,
      dias_disponibles: this.DiasDisponibles.value,
      dias_tomados: this.DiasTomados.value,
      dias_pendientes: this.DiasPendientes.value,
    };
  }
}
