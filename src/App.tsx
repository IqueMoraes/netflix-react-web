import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/main/global-style";

import theme from "./themes/main/theme";
import Login from "./screens/login/login.screen";
import MoviesList from "./screens/movies-list/movies-list.screen";
import { LOGIN_URL } from "./screens/login/login.types";
import { MOVIES_LIST_URL } from "./screens/movies-list/movies-list.types";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <nav>
          <ul>
            <li><Link to="/">Movies List</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={auth ? <MoviesList /> : <Navigate replace to={LOGIN_URL} />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
