import { ParentescoPrimitive } from "../Interfaces/ParentescoPrimitive";

export interface ParentescoRepository {
    create(parentesco: Omit<ParentescoPrimitive, 'id'>): Promise<void>
}