import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Guard from 'components/guard/guard';
import OneSingleShow from 'screens/show/show.screen';
import { SHOW_URL } from 'screens/show/show.type';
import { GlobalStyles } from './themes/main/global-style';

import theme from './themes/main/theme';
import Login from './screens/login/login.screen';
import SignUp from './screens/new-user/new-user.screen';
import ShowsList from './screens/shows-list/shows-list.screen';
import { LOGIN_URL } from './screens/login/login.types';
import { MOVIES_LIST_URL } from './screens/shows-list/shows-list.types';
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
            element={(
              <Guard>
                <ShowsList />
              </Guard>
  )}
            path={MOVIES_LIST_URL}
          />
          <Route
            element={(
              <Guard>
                <OneSingleShow />
              </Guard>
            )}
            path={SHOW_URL}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
