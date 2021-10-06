import App from 'App';
import GlobalStyle from 'styles/globalStyle';
import { ITheme } from 'types/theme/theme.type';
import useTheme from 'hooks/Theme/useTheme';
import { Global, ThemeProvider } from '@emotion/react';

const ThemeProviderContainer = (): JSX.Element => {
  const { theme }: { theme: ITheme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
