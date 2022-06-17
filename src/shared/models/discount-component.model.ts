import { DiscountData } from './discount-db.model';

export interface DiscountComponentProps {
  discounts: DiscountData[];
  onChange(sum: number, isValid: boolean, message: string): void;
}
