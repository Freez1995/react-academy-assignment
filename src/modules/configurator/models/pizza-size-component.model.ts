import { PizzaSizeData } from './pizza-size-db.model';

export interface PizzaSizeComponentProps {
  sizes: PizzaSizeData[];
  onChange(sum: number): void;
}
