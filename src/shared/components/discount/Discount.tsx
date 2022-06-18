/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { DiscountComponentProps } from 'shared/models';
import styles from './Discount.styles';

export const Discount: React.FC<DiscountComponentProps> = ({
  discounts,
  onChange,
}) => {
  const [discountInput, setDiscountInput] = useState<string>('');

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
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
    <form css={styles.discount__container}>
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={(e) => setDiscountInput(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          handleOnClick(e);
        }}
        disabled={discountInput === ''}
      >
        Apply
      </button>
    </form>
  );
};
