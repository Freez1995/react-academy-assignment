import { ToppingData } from './topping-db.model';

export interface ToppingComponentProps {
  topping: ToppingData[];
  onToppingSelect(sum: number): void;
}
