import React, {
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/button/button';
import FormError from 'components/form-error/form-error';
import Input from 'components/input/input';
import { userSlice } from 'store/user/user.slice';
import { Error } from 'types/yup.type';
import { MOVIES_LIST_URL } from 'screens/shows-list/shows-list.types';
import { USER_TOKE_COOKIE } from 'store/user/user.type';
import { tokenSelector } from 'store/user/user.selector';
import NetflixLogo from 'components/netflix-logo/netflix-logo';
import { CreateAccount, Wrapper } from './login.styled';
import { loginSchema } from './login.schema';

function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from = useLocation();
  const token = useSelector(tokenSelector);

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
    if (token) {
      navigate(MOVIES_LIST_URL, {
        state: { from },
      });
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKE_COOKIE);

    if (localToken) {
      dispatch(
        userSlice.actions.setData({
          token: localToken,
        }),
      );
    }
  }, []);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <NetflixLogo width="auto" height="100px" />
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
        <Button onClick={handleSend}>Entrar</Button>
        <FormError message={error} />
        <Link to="/signup">
          <CreateAccount>Criar uma conta</CreateAccount>
        </Link>
      </Grid>
    </Wrapper>
  );
}

export default Form;
