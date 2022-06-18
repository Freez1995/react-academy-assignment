/** @jsxImportSource @emotion/react */
import styles from './Topping.styles';
import React, { useState } from 'react';
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
    <div css={styles.container}>
      {topping.map((topping) => (
        <button
          key={topping.id}
          css={styles.topping__btn({ selected, topping })}
          onClick={() => handleOnClick(topping.id, topping.price)}
        >
          <div
            css={styles.topping__btn__img__background({ selected, topping })}
          >
            <img src={topping.img} />
          </div>
          {topping.name}
        </button>
      ))}
    </div>
  );
};
