export const NIVEL_EDUCATIVO = [
  'PRIMARIA',
  'SECUNDARIA',
  'TECNICO',
  'TECNICO SUPERIOR',
  'NO APLICA',
] as const;

export type NivelEducativoType = (typeof NIVEL_EDUCATIVO)[number];
