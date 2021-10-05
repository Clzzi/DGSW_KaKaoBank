import { css } from '@emotion/react'

const GlobalStyle = () => {
  return css`
    @font-face {
      font-family: AppleB;
      src: url('../assets/font/AppleSDGothicNeoB.ttf');
    }
    @font-face {
      font-family: AppleEB;
      src: url('../assets/font/AppleSDGothicNeoEB.ttf');
    }
    @font-face {
      font-family: AppleH;
      src: url('../assets/font/AppleSDGothicNeoH.ttf');
    }
    @font-face {
      font-family: AppleL;
      src: url('../assets/font/AppleSDGothicNeoL.ttf');
    }
    @font-face {
      font-family: AppleM;
      src: url('../assets/font/AppleSDGothicNeoM.ttf');
    }

    * {
      padding: 0;
      margin: 0;
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
  `
}


export default GlobalStyle;