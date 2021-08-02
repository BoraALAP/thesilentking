import { createGlobalStyle } from 'styled-components'
import image from "../assets/images/bgimage.jpg"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');

  :root{
    --font-main: 'Roboto', sans-serif;
    --font-script: 'Courier New', monospace;
  }

  body{
    background-image: url(${image});
    background-repeat: repeat-y;
    background-size: contain;
    font-family: var(--font-main);
    margin: 0;
  }
`