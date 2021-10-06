import { css } from '@emotion/react';
import useTheme from 'hooks/Theme/useTheme';

const GlobalStyle = () => {
  const { theme } = useTheme();
  const styles = css`
    

    * {
      padding: 0;
      margin: 0;
      background-color: ${theme.backgroundColor};
      color: ${theme.fontColor};
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      outline: none;
    }

    a:hover,
    a:active,
    :visited,
    :link {
      text-decoration: none;
    }

    ol,
    ul {
      list-style: none;
    }

    input {
      outline: none;
      &:focus {
        outline: none;
      }
    }
  `;
  return styles;
};

export default GlobalStyle;
