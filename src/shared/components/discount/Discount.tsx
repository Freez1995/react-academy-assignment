/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { DiscountComponentProps } from 'shared/models';
import { styles } from './Discount.styles';

export const Discount: React.FC<DiscountComponentProps> = ({
  discounts,
  onDiscountApply,
}) => {
  const [discountInput, setDiscountInput] = useState<string>('');

  function handleValidityOfDiscount(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onDiscountApply({
      value: 0,
      isValid: false,
      message: 'Invalid discount code.',
    });
    for (let i = 0; i < discounts.length; i++) {
      discounts[i].discountId === discountInput &&
        onDiscountApply({
          value: discounts[i].discountValue,
          isValid: true,
          message: `+${discounts[i].discountValue * 100}% discount applied.`,
        });
    }
  }

  return (
    <form css={styles.discountContainer}>
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={(e) => setDiscountInput(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          handleValidityOfDiscount(e);
        }}
        disabled={discountInput === ''}
      >
        Apply
      </button>
    </form>
  );
};
