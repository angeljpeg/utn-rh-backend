export interface PrestacionPrimitive {
  id: number;
  nombre: string;
  descripcion: string;
  monto_maximo: number | string;
  frecuencia: string;
  requisitos: string;
  antiguedad_minima: number | string;
}
