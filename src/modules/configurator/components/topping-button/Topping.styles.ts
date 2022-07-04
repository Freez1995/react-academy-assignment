import { css } from '@emotion/react';
// import { ToppingData } from 'modules/configurator/models/topping-db.model';

const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const toppingBtn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
  border-radius: 56px;
  padding: 0px 0px 33px 0px;
  transition: 0.4s;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    border: 1px solid lightgray;
    background-color: #f4f4f4;
  }
`;

const toppingBtnActive = css`
  background-color: #e5c3f5 !important;
`;

const toppingImgContainer = css`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.03);
  border-radius: 40px;
  padding: 22px 26px 18px;
  margin: 11px 11px 8px 11px;
  transition: 0.4s;
`;

const toppingImgContainerActive = css`
  background-color: #edd5f8;
`;

export const styles = {
  container,
  toppingBtn,
  toppingBtnActive,
  toppingImgContainer,
  toppingImgContainerActive,
};
