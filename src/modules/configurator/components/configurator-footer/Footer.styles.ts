import { css } from '@emotion/react';

const footer__container = css`
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #f2f2f2;
  border-radius: 28px 28px 0px 0px;
  height: 148px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: auto;
  input {
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const footer__container__img = css`
  margin-left: 36px;
  align-self: flex-end;
`;

const footer__container__details = css`
  display: flex;
  align-items: center;
  margin: 52px 0 40px 0;
`;

const footer__container__qty = css`
  padding: 0 28px;
  border-right: 1px dashed #dbdbdb;
  input {
    background: #ececf3;
    border-radius: 20px;
    margin: 0;
    width: 60px;
    line-height: 24px;
    border: 0;
    outline: 0;
  }
  p {
    margin-top: 4px;
    font-size: 12px;
    color: #b9b9b9;
  }
`;

const footer__container__order = css`
  padding: 0 28px;
  p:first-of-type {
    color: #b95de4;
    font-size: 32px;
    margin: 0;
    font-weight: bold;
  }
  p:last-child {
    margin-top: 0;
    font-size: 12px;
    color: #b9b9b9;
  }
`;

const footer__container__button = css`
  font-size: 16px;
  padding: 22px 37px;
  margin-right: 60px;
  background-color: #b95de4;
  border-radius: 48px;
  border: 0;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background-color: #ececf3;
  }
  &:active {
    background-color: #e5c3f5;
  }
`;

const styles = {
  footer__container,
  footer__container__img,
  footer__container__details,
  footer__container__qty,
  footer__container__order,
  footer__container__button,
};

export default styles;
