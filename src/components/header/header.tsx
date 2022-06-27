import React from 'react';
import { Grid } from '@mui/material';
import NetflixLogo from 'components/netflix-logo/netflix-logo';
import { useDispatch } from 'react-redux';
import { userSlice } from 'store/user/user.slice';
import { ButtonStyled } from './header.style';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOff());
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <p>.</p>
      <NetflixLogo width="250px" height="40px" />
      <ButtonStyled onClick={handleLogOut}>Sair</ButtonStyled>
    </Grid>
  );
}
