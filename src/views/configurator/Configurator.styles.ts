import { css } from '@emotion/react';

const wrapper = css`
  padding: 0px 333px;
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  * {
    text-align: center;
  }
  h1 {
    font-size: 30px;
    margin: 60px 0px 24px;
  }
`;

const totalPrice = css`
  margin-top: 24px;
`;

const discountContainer = (isValidDiscount: boolean) => css`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  p {
    ${isValidDiscount ? `color: green` : 'color: red'}
  }
  img {
    padding: 16px;
  }
`;

export const styles = {
  wrapper,
  totalPrice,
  discountContainer,
};
