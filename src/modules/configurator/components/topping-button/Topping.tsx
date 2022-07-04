/** @jsxImportSource @emotion/react */
import { styles } from './Topping.styles';
import React, { useState } from 'react';
import { ToppingComponentProps } from 'modules/configurator/models';

export const Topping: React.FC<ToppingComponentProps> = ({
  topping,
  onToppingSelect,
}) => {
  const [selected, setSelected] = useState<Array<number>>([]);

  function handleToppingSelect(id: number, price: number) {
    !selected.includes(id)
      ? [setSelected([...selected, id]), onToppingSelect(price)]
      : [
          selected.splice(selected.indexOf(id), 1),
          onToppingSelect(price * -1),
          setSelected([...selected]),
        ];
  }

  function isItemSelected(index: number): boolean {
    return selected.includes(index + 1);
  }

  return (
    <div css={styles.container}>
      {topping.map((topping, index) => (
        <button
          key={topping.id}
          css={
            isItemSelected(index)
              ? [styles.toppingBtn, styles.toppingBtnActive]
              : styles.toppingBtn
          }
          onClick={() => handleToppingSelect(topping.id, topping.price)}
        >
          <div
            css={
              isItemSelected(index)
                ? [styles.toppingImgContainer, styles.toppingImgContainerActive]
                : styles.toppingImgContainer
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
