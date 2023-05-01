import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { homePage } from '@/main/factories/pages'

import React from 'react'
import { Layout } from '@/presetations/components/layout'
import Header from '@/presetations/components/header'
import profile from '@/presetations/pages/profile'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Header />
          <Route path="/" exact component={homePage} />
          <Route path="/profile/:id" exact component={profile} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
