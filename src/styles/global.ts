import { createGlobalStyle } from 'styled-components';

// import bloblogo from '../assets/blob-square.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #121214;
  }

  button {
    cursor: pointer;
  }
`;
