/** @jsxImportSource @emotion/react */
import { styles } from './SizeSelector.styles';
import React, { useEffect, useState } from 'react';
import { PizzaSizeComponentProps } from 'modules/configurator/models';

export const SizeSelector: React.FC<PizzaSizeComponentProps> = ({
  sizes,
  onPizzaSizeSelect,
}) => {
  const [selected, setSelected] = useState<number>(0);

  function handlePizzaSizeSelect(index: number) {
    setSelected(index);
  }

  useEffect(() => {
    onPizzaSizeSelect(sizes[selected].price);
  }, [selected]);

  return (
    <div css={styles.selectorContainer}>
      {sizes.map((sizes, index) => {
        return (
          <button
            key={sizes.id}
            css={
              selected === index
                ? [styles.button, styles.active]
                : styles.button
            }
            onClick={() => handlePizzaSizeSelect(index)}
          >
            {sizes.size}
          </button>
        );
      })}
    </div>
  );
};
