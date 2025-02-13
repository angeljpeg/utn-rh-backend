import { ParentescoPrimitive } from "./ParentescoPrimitive";

export interface ParentescoCreateDto extends Omit<ParentescoPrimitive, 'id'> {
   id?: number;
}