import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteGitSearch } from '@/data/usecases'
import { GitSearch } from '@/domain/usecases'

export const makeRemoteGitSearch = (): GitSearch =>
  new RemoteGitSearch(makeApiUrl('/search/users'), makeAxiosHttpClient())
