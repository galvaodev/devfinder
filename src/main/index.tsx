import Router from '@/main/routes/router'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom'
import React from 'react'
import theme from '@/styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>,
  document.getElementById('main'))
