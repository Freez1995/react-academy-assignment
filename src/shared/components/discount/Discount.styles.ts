import { css } from '@emotion/react';

const discount__container = css`
  display: flex;
  flex-wrap: wrap;
  background-color: #ececf3;
  border-radius: 72px;
  margin: 0 auto;
  input {
    background-color: transparent;
    color: #8c8c8c;
    flex-grow: 2;
    margin: 30px 0 30px 40px;
    padding: 0;
    width: 181px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.5px;
    border: 0;
    outline: 0;
    &:focus::placeholder {
      color: transparent;
    }
  }
  button {
    background-color: transparent;
    padding: 22px 51px;
    margin: 10px 10px 10px 60px;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    border: 1px solid #dbdbdb;
    border-radius: 36px;
    &:hover:enabled {
      background-color: #f4f4f4;
      transition: 0.3s;
    }
    &:enabled {
      background-color: #fafafa;
    }
  }
`;

const styles = {
  discount__container,
};

export default styles;
