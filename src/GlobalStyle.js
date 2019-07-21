import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  * {
    font-size: 14px;
    box-sizing: border-box;
  }
`

export default GlobalStyle