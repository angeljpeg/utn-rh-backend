import { DocumentoId } from './DocumentosId';
import { PrestacionSolicitudId } from '@/src/PrestacionSolicitud/Domain/Entities/PrestacionSolicitudId';
import { DocumentoNombre } from './DocumentoNombre';
import { DocumentoRuta } from './DocumentoRuta';

export class Documentos {
  public DocumentoId: DocumentoId;
  public SolicitudId: PrestacionSolicitudId;
  public DocumentoNombre: DocumentoNombre;
  public DocumentoRuta: DocumentoRuta;
  public constructor(
    id: DocumentoId,
    solicitud: PrestacionSolicitudId,
    nombre: DocumentoNombre,
    ruta: DocumentoRuta,
  ) {
    this.DocumentoId = id;
    this.SolicitudId = solicitud;
    this.DocumentoNombre = nombre;
    this.DocumentoRuta = ruta;
  }
}
