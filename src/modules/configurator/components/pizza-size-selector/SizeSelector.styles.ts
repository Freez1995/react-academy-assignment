import { css } from '@emotion/react';
import { PizzaSizeData } from 'modules/configurator/models/pizza-size-db.model';

const selector__container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ececf3;
  border-radius: 72px;
  margin: 0 auto;
  padding: 10px;
`;

const selector__container__button = ({
  selected,
  sizes,
}: {
  selected: number;
  sizes: PizzaSizeData;
}) => css`
  background-color: transparent;
  padding: 22px 63px;
  font-size: 16px;
  line-height: 24px;
  transition: 0.5s;
  border: 0;
  cursor: pointer;
  ${selected === sizes.id
    ? `background-color: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 36px;`
    : ''}
`;

const active = css`
  background-color: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 36px;
`;

const styles = {
  selector__container,
  selector__container__button,
  active,
};

export default styles;
