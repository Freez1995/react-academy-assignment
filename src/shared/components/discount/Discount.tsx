import React, { useState } from 'react';
import { DiscountComponentProps } from 'shared/models';
import styles from './Discount.module.css';

export const Discount: React.FC<DiscountComponentProps> = ({
  discounts,
  onChange,
}) => {
  const [discountInput, setDiscountInput] = useState<string>('');

  function handleOnClick() {
    for (const discount of discounts) {
      if (discount.discountId === discountInput) {
        return onChange(
          discount.discountValue,
          true,
          `+${discount.discountValue * 100}% discount applied.`,
        );
      } else {
        onChange(0, false, 'Invalid discount code.');
      }
    }
  }

  return (
    <div className={styles.discount__container}>
      <input
        type="text"
        className={styles.discount__container__input}
        placeholder="Enter discount code"
        onChange={(e) => setDiscountInput(e.target.value)}
      ></input>
      <button
        className={
          styles.discount__container__button +
          ' ' +
          (discountInput !== '' ? styles.active : '')
        }
        onClick={() => {
          handleOnClick();
        }}
        disabled={discountInput === ''}
      >
        Apply
      </button>
    </div>
  );
};
