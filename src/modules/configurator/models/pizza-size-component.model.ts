import { PizzaSizeData } from './pizza-size-db.model';

export interface PizzaSizeComponentProps {
  sizes: PizzaSizeData[];
  onPizzaSizeSelect(sum: number): void;
}
