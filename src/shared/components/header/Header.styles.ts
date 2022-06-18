import { css } from '@emotion/react';

const header__container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 36px;
    padding: 8px 30px;
    cursor: pointer;
    &:hover {
      background-color: #f4f4f4;
      transition: 0.3s;
    }
  }
`;

const styles = { header__container };

export default styles;
