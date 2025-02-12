export interface EmpleadoPrimitive {
  id?: number;
  nombre: string;
  genero: 'M' | 'F';
  fecha_ingreso: Date ;
  antiguedad: number;
}
