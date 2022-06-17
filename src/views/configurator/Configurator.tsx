import React, { useEffect, useState } from 'react';
import { Discount, Header } from 'shared';
import { Footer, SizeSelector, Topping } from 'modules/configurator';
import {
  baconIcon,
  chilliIcon,
  cornIcon,
  eggIcon,
  meatIcon,
  pineappleIcon,
  shroomsIcon,
  deleteIcon,
} from './assets';
import './Configurator.css';

export const Configurator: React.FC = () => {
  const toppingData = [
    {
      id: 1,
      name: 'chilli',
      img: chilliIcon,
      price: 1,
    },
    {
      id: 2,
      name: 'corn',
      img: cornIcon,
      price: 1,
    },
    {
      id: 3,
      name: 'egg',
      img: eggIcon,
      price: 1.5,
    },
    {
      id: 4,
      name: 'pineapple',
      img: pineappleIcon,
      price: 1.5,
    },
    {
      id: 5,
      name: 'meat',
      img: meatIcon,
      price: 2,
    },
    {
      id: 6,
      name: 'shrooms',
      img: shroomsIcon,
      price: 1.5,
    },
    {
      id: 7,
      name: 'bacon',
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

  const [toppingSum, setToppingSum] = useState<number>(0);
  const [sizePrice, setSizePrice] = useState<number>(10);
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [isValidDiscount, setIsValidDiscount] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  function toppingsSum(sum: number) {
    setToppingSum(toppingSum + sum);
  }

  function sizeSum(sum: number) {
    setSizePrice(sum);
  }

  function discountSum(sum: number, isValid: boolean, message: string) {
    setDiscountValue(sum);
    setIsValidDiscount(isValid);
    setInfoMessage(message);
  }

  function handleImgClick() {
    if (isValidDiscount) {
      setInfoMessage('');
      setDiscountValue(0);
      return;
    }
    setInfoMessage('');
  }

  useEffect(() => {
    const pizzaCost = sizePrice + toppingSum;
    const discountTotal = pizzaCost * discountValue;
    setCurrentPrice(pizzaCost - discountTotal);
  }, [discountValue, toppingSum, sizePrice]);

  return (
    <div className="wrapper">
      <Header />
      <h1>Toppings! Toppings!</h1>
      <Topping topping={toppingData} onChange={toppingsSum} />
      <p className="total__price">Total price +${toppingSum}</p>
      <h1>Pizza! Pizza! size</h1>
      <SizeSelector sizes={pizzaSizeData} onChange={sizeSum} />
      <h1>Get the discount</h1>
      <Discount discounts={discountData} onChange={discountSum} />
      <div className="discount__container">
        <p className={'discount' + ' ' + (isValidDiscount ? 'valid' : 'error')}>
          {infoMessage}
        </p>
        <img
          className="discount__img"
          src={infoMessage === '' ? '' : deleteIcon}
          onClick={handleImgClick}
        />
      </div>

      <Footer currentPrice={currentPrice} />
    </div>
  );
};
