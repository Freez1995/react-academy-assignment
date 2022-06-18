/** @jsxImportSource @emotion/react */
import styles from './Footer.styles';
import { FooterComponentProps } from 'modules/configurator/models';
import React, { useEffect, useState } from 'react';
import footerIcon from './assets/footer-pizza-icon.svg';

export const Footer: React.FC<FooterComponentProps> = ({ currentPrice }) => {
  const [quantitySelector, setQuantitySelector] = useState<number | string>(1);
  const [finalPrice, setFinalPrice] = useState<number>(currentPrice);

  function handleChange(quantityValue: number) {
    if (isNaN(quantityValue)) {
      setQuantitySelector('');
      return;
    }
    if (quantityValue > 20) {
      setQuantitySelector(20);
      return;
    }
    if (quantityValue < 0) {
      setQuantitySelector(1);
      return;
    }
    setQuantitySelector(quantityValue);
  }

  useEffect(() => {
    setFinalPrice(currentPrice);
    if (typeof quantitySelector === 'string') {
      setFinalPrice(currentPrice);
      return;
    }
    setFinalPrice(currentPrice * quantitySelector);
  }, [quantitySelector, currentPrice]);

  return (
    <footer css={styles.footer__container}>
      <img css={styles.footer__container__img} src={footerIcon} />
      <div css={styles.footer__container__details}>
        <div css={styles.footer__container__qty}>
          <input
            type="number"
            value={quantitySelector}
            onChange={(e) => handleChange(parseInt(e.target.value))}
          ></input>
          <p>QTY</p>
        </div>
        <div css={styles.footer__container__order}>
          <p>${currentPrice < finalPrice ? finalPrice : currentPrice}</p>
          <p>ORDER TOTAL</p>
        </div>
      </div>
      <button
        css={styles.footer__container__button}
        disabled={
          quantitySelector === '' || quantitySelector === 0 ? true : false
        }
      >
        Buy Pizza! Pizza!
      </button>
    </footer>
  );
};
