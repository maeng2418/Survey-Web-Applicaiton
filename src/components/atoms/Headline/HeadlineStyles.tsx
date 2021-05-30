import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Headline = styled(Typography)`
  font-size: 80px;
  text-align: center;
  font-weight: bold;

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 60px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
