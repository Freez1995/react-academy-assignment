/** @jsxImportSource @emotion/react */
import { styles } from './Configurator.styles';
import React, { useEffect, useState } from 'react';
import { Discount, Header } from 'shared';
import { Footer, SizeSelector, Topping } from 'modules';
import {
  baconIcon,
  chilliIcon,
  cornIcon,
  eggIcon,
  meatIcon,
  pineappleIcon,
  shroomsIcon,
  deleteIcon,
} from 'assets';

export interface DiscountState {
  value: number;
  isValid: boolean;
  message: string;
}

export const Configurator: React.FC = () => {
  const toppingData = [
    {
      id: 1,
      name: 'Chilli',
      img: chilliIcon,
      price: 1,
    },
    {
      id: 2,
      name: 'Corn',
      img: cornIcon,
      price: 1,
    },
    {
      id: 3,
      name: 'Egg',
      img: eggIcon,
      price: 1.5,
    },
    {
      id: 4,
      name: 'Pineapple',
      img: pineappleIcon,
      price: 1.5,
    },
    {
      id: 5,
      name: 'Meat',
      img: meatIcon,
      price: 2,
    },
    {
      id: 6,
      name: 'Shrooms',
      img: shroomsIcon,
      price: 1.5,
    },
    {
      id: 7,
      name: 'Bacon',
      img: baconIcon,
      price: 2.5,
    },
  ];
  const pizzaSizeData = [
    {
      id: 1,
      size: 'S',
      price: 10,
    },
    {
      id: 2,
      size: 'M',
      price: 15,
    },
    {
      id: 3,
      size: 'L',
      price: 20,
    },
  ];
  const discountData = [
    {
      discountId: 'discount50',
      discountValue: 0.5,
    },
    {
      discountId: 'discount10',
      discountValue: 0.1,
    },
  ];

  const discountDefaultState: DiscountState = {
    value: 0,
    isValid: false,
    message: '',
  };

  const [toppingSum, setToppingSum] = useState<number>(0);
  const [sizePrice, setSizePrice] = useState<number>(0);
  const [discount, setDiscount] = useState<DiscountState>(discountDefaultState);
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  function toppingsPrice(sum: number) {
    setToppingSum(toppingSum + sum);
  }

  function pizzaSizePrice(sum: number) {
    setSizePrice(sum);
  }

  function discountApply({ value, isValid, message }: DiscountState) {
    setDiscount({ value: value, isValid: isValid, message: message });
  }

  function handleRemoveDiscount() {
    setDiscount(discountDefaultState);
  }

  useEffect(() => {
    const pizzaCost = sizePrice + toppingSum;
    discount.value !== 0
      ? setCurrentPrice(pizzaCost - pizzaCost * discount.value)
      : setCurrentPrice(pizzaCost);
  }, [discount.value, toppingSum, sizePrice]);

  return (
    <div css={styles.wrapper}>
      <Header />
      <h1>Toppings! Toppings!</h1>
      <Topping topping={toppingData} onToppingSelect={toppingsPrice} />
      <p css={styles.totalPrice}>Total price +${toppingSum}</p>
      <h1>Pizza! Pizza! size</h1>
      <SizeSelector sizes={pizzaSizeData} onPizzaSizeSelect={pizzaSizePrice} />
      <h1>Get the discount</h1>
      <Discount discounts={discountData} onDiscountApply={discountApply} />
      <div css={styles.discountContainer(discount.isValid)}>
        <p>{discount.message}</p>
        <img
          src={discount.message !== '' ? deleteIcon : ''}
          onClick={handleRemoveDiscount}
        />
      </div>
      <Footer currentPrice={currentPrice} />
    </div>
  );
};
