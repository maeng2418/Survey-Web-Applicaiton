import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const DeleteBtn = styled(Button)`
  position: absolute;
  top: 12px;
  right: 24px;
  background-color: #ff5252;

  &:hover {
    background-color: #e53935;
  }
`;
