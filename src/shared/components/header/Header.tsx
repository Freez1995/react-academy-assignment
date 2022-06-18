/** @jsxImportSource @emotion/react */
import React from 'react';
import pizzaIcon from './assets/navigation-pizza-icon.svg';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <div css={styles.header__container}>
      <p>Pizz-á-tron</p>
      <img src={pizzaIcon} />
      <button>Log out</button>
    </div>
  );
};
