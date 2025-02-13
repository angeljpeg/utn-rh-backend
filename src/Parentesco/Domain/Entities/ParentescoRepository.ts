import { IQuery } from "@/src/Shared/Domain/Interfaces/Query";
import { ParentescoPrimitive } from "../Interfaces/ParentescoPrimitive";

export interface ParentescoRepository {
    create(parentesco: Omit<ParentescoPrimitive, 'id'>): Promise<void>
    getAll(query: IQuery<ParentescoPrimitive>): Promise<ParentescoPrimitive[]>
    getById(id: number): Promise<ParentescoPrimitive | null>
}