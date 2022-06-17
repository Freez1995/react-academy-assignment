import { FooterComponentProps } from 'modules/configurator/models';
import React, { useEffect, useState } from 'react';
import footerIcon from './assets/footer-pizza-icon.svg';
import styles from './Footer.module.css';

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
    <footer className={styles.footer__container}>
      <img className={styles['foorter__container--img']} src={footerIcon} />
      <div className={styles['footer__container--details']}>
        <div className={styles['footer__container--qty']}>
          <input
            type="number"
            value={quantitySelector}
            onChange={(e) => handleChange(parseInt(e.target.value))}
          ></input>
          <p>QTY</p>
        </div>
        <div className={styles['footer__container--order']}>
          <p>${currentPrice < finalPrice ? finalPrice : currentPrice}</p>
          <p>ORDER TOTAL</p>
        </div>
      </div>
      <button
        className={styles['footer__container--button']}
        disabled={
          quantitySelector === '' || quantitySelector === 0 ? true : false
        }
      >
        Buy Pizza! Pizza!
      </button>
    </footer>
  );
};
