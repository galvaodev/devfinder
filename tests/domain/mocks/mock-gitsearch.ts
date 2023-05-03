import { GitSearchModel } from '../models'
import { GitSearch } from '../usecases'
import { mockGitResult } from './mock-githubResult'

export const mockAuthenticationModel = (): GitSearch.Model => mockGitResult()

export class GitSearchSpy implements GitSearch {
  search: (params: GitSearch.Params) => Promise<GitSearchModel>
  list = mockAuthenticationModel()
  params: GitSearch.Params
  callsCount = 1
}
