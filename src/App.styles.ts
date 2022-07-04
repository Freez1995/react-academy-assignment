import { css } from '@emotion/react';

const global = css`
  @import url('https://fonts.googleapis.com/css?family=Inter');
  * {
    box-sizing: border-box;
    font-family: 'Inter';
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fafafa;
  }
`;

export const styles = {
  global,
};
