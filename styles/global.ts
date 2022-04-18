import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    width: 100%;
    height: 100%;
		min-width: fit-content;
  }

  body {
    width: 100%;
    height: 100%;
  }
`;
