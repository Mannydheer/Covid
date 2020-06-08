import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  
    @media screen and (max-width: 1200px) {
      font-size: 15px
    }

    @media screen and (max-width: 1000px) {
      font-size: 14px
    }

    @media screen and (max-width: 800px) {
      font-size: 13px
    }

    @media screen and (max-width: 600px) {
      font-size: 12px
    }

  }
 

  html,
  body,
  span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    background-color: #34435e;
    

    
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul{
    padding: 0; 
    margin: 0; 
  }
`;

export default GlobalStyles;
