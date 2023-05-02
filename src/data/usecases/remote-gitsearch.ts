import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { GitSearch } from '@/domain/usecases'
import { InvalidSearchError, UnexpectedError } from '@/domain/errors'

export class RemoteGitSearch implements GitSearch {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<GitSearch.Model>
  ) { }

  async search (params: GitSearch.Params): Promise<GitSearch.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url + `?q=${params.q}&per_page=${params.perPage}`,
      method: 'get'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidSearchError()
      default: throw new UnexpectedError()
    }
  }
}
