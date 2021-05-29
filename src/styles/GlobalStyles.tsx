import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }


  @media (min-width: 1024px) {
    /* CSS */
    html {
      font-size: 16px;
    }
  }

  @media (min-width: 481px) and (max-width: 1023px) {
    /* CSS */
    html {
      font-size: 14px;
    }
  }

  @media (min-width: 280px) and (max-width: 480px) {
    /* CSS */
    html {
      font-size: 8px;
    }
  }
`;

export default GlobalStyles;
