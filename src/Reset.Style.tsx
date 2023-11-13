import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #efefef;
    font-family: 'Montserrat', sans-serif; 
    color: #252B42;
    & a{
        color: #252B42;
        cursor: pointer;
    }
  }

`;

export default GlobalStyle;
