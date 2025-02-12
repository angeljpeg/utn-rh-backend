import { DescansoPrimitive } from './DescansoPrimitive';

export interface CreateDescansoDto extends Omit<DescansoPrimitive, 'id'> {
  id?: number;
}
