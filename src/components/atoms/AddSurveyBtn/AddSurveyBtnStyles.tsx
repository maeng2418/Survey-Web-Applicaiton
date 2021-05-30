import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const AddSurveyBtn = styled(IconButton)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  & svg {
    width: 64px;
    height: 64px;
  }
`;
