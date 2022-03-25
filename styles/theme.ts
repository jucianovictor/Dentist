export type Color = {
  default: string,
  light: string,
  dark: string,
  contrast: string,
};

type Theme = {
  colors: {
    primary: Color,
    secondary: Color,
    accent: Color
  }
};

const theme: Theme = {
  colors: {
    primary: {
      default: '#7061EE',
      light: '#8f84f1',
      dark: '#7163ed',
      contrast: '#ffffff',
    },
    secondary: {
      default: '#797693',
      light: '#8885A3',
      dark: '#696684',
      contrast: '#ffffff',
    },
    accent: {
      default: '#FF5B83',
      dark: '#ff5c83',
      light: '#ff868c',
      contrast: '#fff',
    },
  },
};

export default theme;
