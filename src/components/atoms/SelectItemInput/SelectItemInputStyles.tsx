import styled from 'styled-components';
import { Grid, InputAdornment } from '@material-ui/core';

export const SelectItemInput = styled(Grid)`
  justify-content: center;
`;

export const SelectItemName = styled(InputAdornment)`
  & > p {
    color: #2196f3;
  }
`;
