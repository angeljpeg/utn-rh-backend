export const PARENTESCOS = ['PADRE', 'MADRE', 'HIJO/A', 'HERMANO/A'] as const;

export type ParentescoType = (typeof PARENTESCOS)[number];
