/** @jsxImportSource @emotion/react */
import { headerPizzaIcon } from 'assets';
import React from 'react';
import { styles } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <div css={styles.headerContainer}>
      <p>Pizz-á-tron</p>
      <img src={headerPizzaIcon} />
      <button>Log out</button>
    </div>
  );
};
