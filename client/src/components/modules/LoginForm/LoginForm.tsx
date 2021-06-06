import React from 'react';
import * as S from './LoginFormStyles';
import { ILoginFormProps } from 'module-props';
import { FormControlLabel, TextField, Button, Checkbox } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginForm: React.FC<ILoginFormProps> = ({ onClickSubmitBtn }) => {
  const initialValues = {
    email: localStorage.getItem('email') || '',
    password: '',
    remember: false,
  };

  const validationSchema = yup.object({
    email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력하세요.'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/,
        '영문 대소문자 6~20 글자, 최소 1개의 숫자 혹은 특수 문자를 포함해주세요.'
      )
      .required('패스워드를 입력하세요.'),
    remember: yup.boolean(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.remember) {
        localStorage.setItem('email', values.email);
      } else {
        localStorage.removeItem('email');
      }
      onClickSubmitBtn({ email: values.email, password: values.password });
    },
  });

  return (
    <S.LoginForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField
        required
        name="email"
        label="E-MAIL"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        required
        name="password"
        label="PASSWORD"
        type="password"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormControlLabel
        control={<Checkbox name="remember" color="primary" />}
        name="remember"
        label="Remember me"
        onChange={formik.handleChange}
      />
      <Button size="large" variant="contained" color="primary" type="submit">
        SIGN IN
      </Button>
    </S.LoginForm>
  );
};

export default LoginForm;
