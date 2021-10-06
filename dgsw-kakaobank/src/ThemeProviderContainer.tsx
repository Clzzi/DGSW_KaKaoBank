import { Global, ThemeProvider } from "@emotion/react"
import App from "App";
import useTheme from "hooks/Theme/useTheme";
import GlobalStyle from "styles/globalStyle";
import { ITheme } from "types/theme/theme.type";

const ThemeProviderContainer = ():JSX.Element => {
  const theme:ITheme = useTheme();
  return (
    <ThemeProvider theme = {theme} >
      <Global styles={GlobalStyle} />
      <App/>
    </ThemeProvider>
  )
}

export default ThemeProviderContainer;