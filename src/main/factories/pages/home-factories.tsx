import { Home } from '@/presetations/pages'
import React from 'react'
import { makeRemoteGitSearch } from '../usecases'

export const homePage: React.FC = () => {
  return (
    <>
      <Home
        gitSearch={makeRemoteGitSearch()}
      />
    </>
  )
}
