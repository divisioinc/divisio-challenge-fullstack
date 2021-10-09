import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --red: #CE1131;
    --dark-grey: #1F1F1F;
    --green: #33CC95;
    --mirror-dark: #009DD4;
    --mirror-normal: #0BCDFF;
    --mirror-light: #9CE8FF;
    --border: #C4C4C4;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{ //responsive layout with REM
    @media (max-width: 1080px){
        font-size: 93,75%; //15px
    }
    @media (max-width: 720px){
        font-size: 87,5%; //14px
    }
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
}

`
