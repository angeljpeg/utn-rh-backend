import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { SolicitudPrestacionSchema } from './SolicitudPrestacionSchema';

export const DocumentoSchema = mysqlTable('documentos', {
  id: int().autoincrement().primaryKey(),
  solicitud_id: int().references(() => SolicitudPrestacionSchema.id),
  nombre: varchar({ length: 50 }).notNull(),
  ruta: varchar({ length: 255 }).notNull(),
});
