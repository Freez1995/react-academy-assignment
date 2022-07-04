import { css } from '@emotion/react';

const selectorContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ececf3;
  border-radius: 72px;
  margin: 0 auto;
  padding: 10px;
`;

const button = css`
  background-color: transparent;
  padding: 22px 63px;
  font-size: 16px;
  line-height: 24px;
  transition: 0.5s;
  border: 0;
  cursor: pointer;
`;

const active = css`
  background-color: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 36px;
`;

export const styles = {
  selectorContainer,
  button,
  active,
};
