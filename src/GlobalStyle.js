import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
  }

  *,
  ::after,  ::before {
    box-sizing: inherit;
  }

body {
  background-color: ${({ theme }) => theme.color.whisper};
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: scroll;
}
`;
