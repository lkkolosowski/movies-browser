import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Container } from "./common/Container/styled";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Container>Hello World!</Container>
    </ThemeProvider>
  );
}

export default App;
