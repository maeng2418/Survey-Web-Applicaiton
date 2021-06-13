import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Chart = styled(Paper)`
  position: relative;
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Selector = styled.div`
  position: absolute;
  top: 24px;
  right: 48px;
`;
