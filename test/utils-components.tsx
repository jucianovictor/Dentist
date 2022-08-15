import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import GlobalStyle from '../styles/global';

const WithTheme: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
		<GlobalStyle />
	</ThemeProvider>
);

export default WithTheme;
