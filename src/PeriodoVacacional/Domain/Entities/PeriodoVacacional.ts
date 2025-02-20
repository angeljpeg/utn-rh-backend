import { PeriodoVacacionalPrimitive } from '../Interfaces/PeriodoVacionalPrimitive';

export class PeriodoVacacional {
  public PeriodoVacacionalId: number;
  public Anio: number;
  public DiasDisponibles: number;
  public DiasTomados: number;
  public DiasPendientes: number;

  public constructor(
    id: number,
    anio: number,
    diasDisponibles: number,
    diasTomados: number,
    diasPendientes: number,
  ) {
    this.PeriodoVacacionalId = id;
    this.Anio = anio;
    this.DiasDisponibles = diasDisponibles;
    this.DiasTomados = diasTomados;
    this.DiasPendientes = diasPendientes;
  }

  public toPrimitive(): PeriodoVacacionalPrimitive {
    return {
      periodo_vacacional_id: this.PeriodoVacacionalId,
      anio: this.Anio,
      dias_disponibles: this.DiasDisponibles,
      dias_tomados: this.DiasTomados,
      dias_pendientes: this.DiasPendientes,
    };
  }
}
