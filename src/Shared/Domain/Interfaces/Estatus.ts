export const ESTATUS = ['PENDIENTE', 'APROVADO', 'RECHAZADO'] as const;

export type EstatusType = (typeof ESTATUS)[number];
