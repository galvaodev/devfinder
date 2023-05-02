import { GitSearchModel } from '@/domain/models'

export interface GitSearch {
  search: (params: GitSearch.Params) => Promise<GitSearch.Model>
}

export namespace GitSearch {
  export type Params = {
    q: string
    perPage: number
  }

  export type Model = GitSearchModel
}
