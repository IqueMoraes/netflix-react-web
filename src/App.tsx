import { ThemeProvider } from "styled-components";
import Login from "./screens/login/login.screen";
import { GlobalStyles } from "./themes/main/global-style";
import theme from "./themes/main/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
