import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';

export const QuestionFormBox = styled(Paper)`
  position: relative;
  background: #4e4e4e;
  padding: 54px 24px 24px;
`;

export const DeleteBtn = styled(Button)`
  position: absolute;
  top: 12px;
  right: 24px;
  background-color: #ff5252;

  &:hover {
    background-color: #e53935;
  }
`;
