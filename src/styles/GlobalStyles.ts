import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #0d2f81;
    --secondary: #ffe7aa;
    --tertiary: #fff;
    --quaternary: #000;
    --blue: #0061ff;
    --border: #bdc4c9;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  *, input, button {
    font-family: Roboto, sans-serif;
  }


`;
