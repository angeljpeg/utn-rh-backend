import { int, mysqlEnum, mysqlTable, timestamp } from 'drizzle-orm/mysql-core';
import { EmpleadoSchema } from './EmpleadoSchema';
import { DescansoSchema } from './DescansoSchema';

export const SolicitudDescansoSchema = mysqlTable('solicitud_descansos', {
  id: int().autoincrement().primaryKey(),
  empleado_id: int().references(() => EmpleadoSchema.id),
  descanso_id: int().references(() => DescansoSchema.id),
  fecha_solicitud: timestamp().notNull().defaultNow(),
  aprobado_por: int().references(() => EmpleadoSchema.id),
  estatus: mysqlEnum(['APROBADO', 'PENDIENTE', 'RECHAZADO']).default('PENDIENTE'),
});
