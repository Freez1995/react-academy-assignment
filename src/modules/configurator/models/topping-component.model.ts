import { ToppingData } from './topping-db.model';

export interface ToppingComponentProps {
  topping: ToppingData[];
  onChange(sum: number): void;
}
