import GlobalStyle from 'styles/globalStyle';
import { ITheme } from 'types/theme/theme.type';
import useTheme from 'hooks/Theme/useTheme';
import { Global, ThemeProvider } from '@emotion/react';
import Routes from 'components/Routes';
import { ToastContainer } from 'react-toastify';

const ThemeProviderContainer = (): JSX.Element => {
  const { theme }: { theme: ITheme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={5000} limit={9} />
      <Global styles={GlobalStyle} />
      <Routes />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
