import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { GitSearchInputModel } from '@/domain/models'

export const setCurrentGithubAdapter = (github: GitSearchInputModel): void => {
  makeLocalStorageAdapter().set('github', github)
}

export const getCurrentGithubAdapter = (): GitSearchInputModel => {
  return makeLocalStorageAdapter().get('github')
}
