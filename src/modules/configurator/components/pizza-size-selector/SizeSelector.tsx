import React, { useState } from 'react';
import styles from './SizeSelector.module.css';
import { PizzaSizeComponentProps } from 'modules/configurator/models';

export const SizeSelector: React.FC<PizzaSizeComponentProps> = ({
  sizes,
  onChange,
}) => {
  const [selected, setSelected] = useState<number>(1);

  function handleOnClick(id: number, price: number) {
    setSelected(id);
    onChange(price);
  }

  return (
    <div className={styles.selector__container}>
      {sizes.map((sizes) => {
        return (
          <button
            key={sizes.id}
            className={
              styles['selector__container__button'] +
              ' ' +
              (selected === sizes.id ? styles.active : '')
            }
            onClick={() => handleOnClick(sizes.id, sizes.price)}
          >
            {sizes.size}
          </button>
        );
      })}
    </div>
  );
};
