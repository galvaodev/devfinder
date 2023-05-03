import { setCurrentGithubAdapter, getCurrentGithubAdapter } from '@/main/adapters'
import { LocalStorageAdapter } from '@/infra/cache'
import { mockGitubModel } from '@/tests/domain/mocks'

jest.mock('@/infra/cache/local-storage-adapter')

describe('LocalStorageAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const githubProfile = mockGitubModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')

    setCurrentGithubAdapter(githubProfile)

    expect(setSpy).toHaveBeenCalledWith('github', githubProfile)
  })

  test('Should call LocalStorageAdapter.get with correct value', () => {
    const githubProfile = mockGitubModel()
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce(githubProfile)

    const result = getCurrentGithubAdapter()

    expect(getSpy).toHaveBeenCalledWith('github')
    expect(result).toEqual(githubProfile)
  })
})
