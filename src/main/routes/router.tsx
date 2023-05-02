import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { homePage } from '@/main/factories/pages'
import { setCurrentGithubAdapter, getCurrentGithubAdapter } from '@/main/adapters'

import React from 'react'
import { Layout } from '@/presetations/components'
import Header from '@/presetations/components/header'
import { RecoilRoot } from 'recoil'
import profile from '@/presetations/pages/profile'
import { currentGitSearchState } from '@/presetations/components/atoms/atoms'

const Router: React.FC = () => {
  const state = {
    setCurrentGitSearch: setCurrentGithubAdapter,
    getCurrentGitSearch: getCurrentGithubAdapter
  }
  return (
    <RecoilRoot initializeState={({ set }) => set(currentGitSearchState, state)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Header />
            <Route path="/" exact component={homePage} />
            <Route path="/profile/:id" exact component={profile} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
