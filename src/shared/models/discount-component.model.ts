import { DiscountState } from 'views';
import { DiscountData } from './discount-db.model';

export interface DiscountComponentProps {
  discounts: DiscountData[];
  onDiscountApply({ value, isValid, message }: DiscountState): void;
}
