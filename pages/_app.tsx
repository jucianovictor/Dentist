import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

import LoginPage from '.';

const App: React.FC<AppProps> = () => (
  <ThemeProvider theme={theme}>
    <LoginPage />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
