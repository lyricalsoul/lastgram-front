import theme from '../theme.js'
import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.darkMode ? '#000000' : '#ffffff'};
    color: ${theme.darkMode ? '#ffffff' : '#000000'};
  }
`

export default function VelvetProvider (props) {
  return <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </>
}