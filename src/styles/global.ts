
import {
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'

const GlobalStyles: DefaultTheme = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
 
  input, button {
    font-family: 'Space Mono', monospace;
  }
  ${({ theme }: any) => css`
    body {
      background: ${theme.colors.background};
      font-family: 'Space Mono', monospace;
    }
  `}
`
export default GlobalStyles
