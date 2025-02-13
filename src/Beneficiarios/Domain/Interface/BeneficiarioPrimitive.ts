import { NIVEL_EDUCATIVO } from "./NivelEducativo";

export interface BeneficiarioPrimitive {
  id?: number;
  empleado_id: number;
  nombre: string;
  parentesco_id: number;
  nivel_educativo: typeof NIVEL_EDUCATIVO[number];
}
