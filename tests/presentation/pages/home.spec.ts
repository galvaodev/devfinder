import { Home } from '@/presetations/pages'
import { GitSearchSpy } from '@/tests/domain/mocks'
import { renderWithHistory } from '@/tests/utils/helpers'
import { createMemoryHistory } from 'history'
import faker from 'faker'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { GitSearchItems } from '@/domain/models'

type SutTypes = {
  gitSearch: GitSearchSpy
  setGitSearchMock: (profile: GitSearchItems) => void
}

const history = createMemoryHistory({ initialEntries: ['/'] })
const makeSut = (): SutTypes => {
  const gitSearch = new GitSearchSpy()
  const { setGitSearchMock } = renderWithHistory({
    history,
    Page: () => Home({ gitSearch })
  })
  return {
    setGitSearchMock,
    gitSearch
  }
}

const simulateSubmit = async (search = faker.fake('Search')): Promise<void> => {
  const input = screen.getByTestId('input')
  fireEvent.input(input, { target: { search } })
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Home Component', () => {
  test('Should call GitSearch on succes', async () => {
    const { gitSearch } = makeSut()
    await simulateSubmit()
    expect(gitSearch.callsCount).toBe(1)
  })
})
