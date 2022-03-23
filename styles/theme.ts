export type Color = {
  value: string,
  light: string,
  dark: string,
  contrast: string,
};

type Theme = {
  colors: {
    primary: Color,
    secondary: Color,
    background: Color,
  }
};

const theme: Theme = {
  colors: {
    primary: {
      value: '#1a237e',
      light: '#534bae',
      dark: '#000051',
      contrast: '#ffffff',
    },
    secondary: {
      value: '#69f0ae',
      light: '#9fffe0',
      dark: '#2bbd7e',
      contrast: '#ffffff',
    },
    background: {
      value: '#e0e0e0',
      light: '#ffffff',
      dark: '#aeaeae',
      contrast: '#000000',
    },
  },
};

export default theme;
