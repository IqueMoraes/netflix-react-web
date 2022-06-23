import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Guard from 'components/guard/guard';
import { GlobalStyles } from './themes/main/global-style';

import theme from './themes/main/theme';
import Login from './screens/login/login.screen';
import SignUp from './screens/new-user/new-user.screen';
import MoviesList from './screens/movies-list/movies-list.screen';
import { LOGIN_URL } from './screens/login/login.types';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.types';
import { SIGNUP_URL } from './screens/new-user/new-user.types';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<SignUp />} path={SIGNUP_URL} />
          <Route
            element={<Guard><MoviesList /></Guard>}
            path={MOVIES_LIST_URL}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
