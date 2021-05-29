import { styled as materialStyled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const Headline = materialStyled(Typography)({
  fontSize: '5rem',
  lineHeight: '1.2',
  textAlign: 'center',
  fontWeight: 'bold',
});
