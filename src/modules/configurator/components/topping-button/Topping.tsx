import React, { useState } from 'react';
import styles from './Topping.module.css';
import { ToppingComponentProps } from 'modules/configurator/models';

export const Topping: React.FC<ToppingComponentProps> = ({
  topping,
  onChange,
}) => {
  const [selected, setSelected] = useState<Array<number>>([]);

  function handleOnClick(id: number, price: number) {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
      onChange(price);
    } else {
      selected.splice(selected.indexOf(id), 1);
      onChange(price * -1);
      setSelected([...selected]);
    }
  }

  return (
    <div className={styles.container}>
      {topping.map((topping) => (
        <button
          key={topping.id}
          className={
            styles.topping__btn +
            ' ' +
            (selected.includes(topping.id) ? styles.active : '')
          }
          onClick={() => handleOnClick(topping.id, topping.price)}
        >
          <div
            className={
              styles['topping__btn--img__background'] +
              ' ' +
              (selected.includes(topping.id) ? styles.active : '')
            }
          >
            <img src={topping.img} />
          </div>
          {topping.name}
        </button>
      ))}
    </div>
  );
};
