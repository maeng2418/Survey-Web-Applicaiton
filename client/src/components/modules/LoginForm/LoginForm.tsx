import React from 'react';
import * as S from './LoginFormStyles';
import { ILoginFormProps } from 'module-props';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LoginForm: React.FC<ILoginFormProps> = ({ onClickSubmitBtn, data }) => {
  return (
    <S.LoginForm noValidate autoComplete="off">
      <TextField required label="ID" variant="outlined" />
      <TextField required label="PASSWORD" type="password" variant="outlined" />
      <FormControlLabel
        control={<Checkbox name="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        onClick={() => onClickSubmitBtn(data)}
        size="large"
        variant="contained"
        color="primary"
      >
        SIGN IN
      </Button>
    </S.LoginForm>
  );
};

export default LoginForm;
