export const NIVEL_EDUCATIVO = [
  'PRIMARIA',
  'SECUNDARIA',
  'TECNICO',
  'TECNICO SUPERIOR',
  'NO APLICA',
] as const;

export type NivelEducativo = (typeof NIVEL_EDUCATIVO)[number];
