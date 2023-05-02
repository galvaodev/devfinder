import { GitSearchInputModel } from '@/domain/models'

import { atom } from 'recoil'

export const currentGitSearchState = atom({
  key: 'currentGitSearchState',
  default: {
    getCurrentGitSearch: null as () => GitSearchInputModel,
    setCurrentGitSearch: null as (github: GitSearchInputModel) => void
  }
})
