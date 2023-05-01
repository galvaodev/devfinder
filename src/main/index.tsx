import Router from '@/main/routes/router'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom'
import React from 'react'
import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>,
  document.getElementById('main')
)
