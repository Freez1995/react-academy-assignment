/** @jsxImportSource @emotion/react */
import { styles } from './Footer.styles';
import { FooterComponentProps } from 'modules/configurator/models';
import React, { useEffect, useState } from 'react';
import { footerPizzaIcon } from 'assets';

export const Footer: React.FC<FooterComponentProps> = ({ currentPrice }) => {
  const [quantitySelector, setQuantitySelector] = useState<number | string>(1);
  const [finalPrice, setFinalPrice] = useState<number>(currentPrice);

  function handlePizzaQuantityChange(quantityValue: number) {
    return isNaN(quantityValue)
      ? setQuantitySelector('')
      : quantityValue > 20
      ? setQuantitySelector(20)
      : quantityValue < 0
      ? setQuantitySelector(1)
      : setQuantitySelector(quantityValue);
  }

  useEffect(() => {
    typeof quantitySelector === 'string'
      ? setFinalPrice(currentPrice)
      : setFinalPrice(currentPrice * quantitySelector);
  }, [quantitySelector, currentPrice]);

  return (
    <footer css={styles.footerContainer}>
      <img src={footerPizzaIcon} />
      <div css={styles.detailsContainer}>
        <div css={styles.qtyContainer}>
          <input
            type="number"
            value={quantitySelector}
            onChange={(e) =>
              handlePizzaQuantityChange(parseInt(e.target.value))
            }
          ></input>
          <p>QTY</p>
        </div>
        <div css={styles.orderContainer}>
          <p>${finalPrice.toFixed(2)}</p>
          <p>ORDER TOTAL</p>
        </div>
      </div>
      <button
        disabled={
          quantitySelector === '' || quantitySelector === 0 ? true : false
        }
      >
        Buy Pizza! Pizza!
      </button>
    </footer>
  );
};
