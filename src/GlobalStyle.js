import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body, #root {
    margin: 0;
    background-color: #34495e;
    color: #bdc3c7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  * {
    font-family: "Open Sans";
    font-size: 14px;
    box-sizing: border-box;
  }
`

export default GlobalStyle