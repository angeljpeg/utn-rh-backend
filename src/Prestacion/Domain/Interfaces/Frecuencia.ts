export const FRECUENCIAS = ['Unico', 'Una Vez al Año'] as const;

export type FrecuenciaType = (typeof FRECUENCIAS)[number];
