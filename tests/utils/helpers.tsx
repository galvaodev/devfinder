import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from '@/styles/theme'
import React from 'react'

import { GitSearchItems, GitSearchModel } from '@/domain/models'
import { currentGitSearchState } from '@/presetations/components/atoms/atoms'
import { mockGitResult } from '@/tests/domain/mocks'

import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { MutableSnapshot, RecoilRoot, RecoilState } from 'recoil'

type Params = {
  Page: React.FC
  history: MemoryHistory
  search?: GitSearchModel
  states?: Array<{ atom: RecoilState<any>, value: any }>
}

type Result = {
  setGitSearchMock: (search: GitSearchItems) => void
}

export const renderWithHistory = ({ Page, history, search = mockGitResult(), states = [] }: Params): Result => {
  const setGitSearchMock = jest.fn()
  const mockedState = {
    setCurrentGitSearch: setGitSearchMock,
    getCurrentGitSearch: () => search
  }
  const initializeState = ({ set }: MutableSnapshot): void => {
    [...states, { atom: currentGitSearchState, value: mockedState }].forEach(state => set(state.atom, state.value))
  }
  render(
    <RecoilRoot initializeState={initializeState}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  )
  return {
    setGitSearchMock
  }
}
