import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
		min-width: fit-content;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

	::-webkit-scrollbar {
		width: 3px;
		height: 3px;
	}

	::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.secondary.light};
		border-radius: 20px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.accent.light};
		border-radius: 20px;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => theme.colors.accent.default};
	}
`;
