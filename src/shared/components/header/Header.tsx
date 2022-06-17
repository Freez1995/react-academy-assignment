import React from 'react';
import pizzaIcon from './assets/navigation-pizza-icon.svg';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.header__container}>
      <p>Pizz-á-tron</p>
      <img src={pizzaIcon} />
      <button className={styles['header__container--button']}>Log out</button>
    </div>
  );
};
