import Router from '@/main/routes/router'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'

const root = createRoot(document.getElementById('main'))

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
)
