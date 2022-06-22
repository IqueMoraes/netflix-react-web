import React, {
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/button/button';
import FormError from 'components/form-error/form-error';
import Input from 'components/input/input';
import { authenticated } from 'store/user/user.selector';
import { userSlice } from 'store/user/user.slice';
import { Error } from 'types/yup.type';
import { loginSchema } from './new-user.schema';
import { Wrapper } from '../login/login.styled';

function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const userAuthenticated = useSelector(authenticated);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setError('');
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSend = useCallback(async () => {
    try {
      await loginSchema.validate(data);

      dispatch(userSlice.actions.authentication(data));
    } catch (yupError: unknown) {
      setError((yupError as Error).errors[0]);
    }
  }, [data]);

  useEffect(() => {
    // eslint-disable-next-line padded-blocks
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <h1 style={{ color: 'red', textAlign: 'center' }}>Novo usário:</h1>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Confirmação de senha"
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Criar usuário</Button>
        <FormError message={error} />
      </Grid>
    </Wrapper>
  );
}

export default Form;
