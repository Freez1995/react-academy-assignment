/** @jsxImportSource @emotion/react */
import styles from './SizeSelector.styles';
import React, { useState } from 'react';
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
    <div css={styles.selector__container}>
      {sizes.map((sizes) => {
        return (
          <button
            key={sizes.id}
            css={styles.selector__container__button({ selected, sizes })}
            onClick={() => handleOnClick(sizes.id, sizes.price)}
          >
            {sizes.size}
          </button>
        );
      })}
    </div>
  );
};
