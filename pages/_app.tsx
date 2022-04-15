import { AppProps } from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import '../styles/_fonts.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<Component {...pageProps} />
		<GlobalStyle />
	</ThemeProvider>
);

export default App;
