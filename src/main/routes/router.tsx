import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { homePage } from '@/main/factories/pages'

import React from 'react'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={homePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
