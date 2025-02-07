import { int, mysqlEnum, mysqlTable, timestamp } from 'drizzle-orm/mysql-core';
import { EmpleadoSchema } from './EmpleadoSchema';
import { PrestacionSchema } from './PrestacionSchema';

export const SolicitudPrestacionSchema = mysqlTable('solicitud_prestaciones', {
  id: int().autoincrement().primaryKey(),
  empleado_id: int().references(() => EmpleadoSchema.id),
  prestacion_id: int().references(() => PrestacionSchema.id),
  fecha_solicitud: timestamp().notNull().defaultNow(),
  aprobado_por: int().references(() => EmpleadoSchema.id),
  estatus: mysqlEnum(['APROBADO', 'PENDIENTE', 'RECHAZADO']).default('PENDIENTE'),
});
