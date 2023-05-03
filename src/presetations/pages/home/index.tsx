import React, { useEffect } from 'react'
import { Input, ProfileCard, ProfileCardLoading } from '@/presetations/components'
import Button from '@/presetations/components/button'
import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchInput } from '@/presetations/pages/home/components/atoms'
import { GitSearch } from '@/domain/usecases'
import { currentGitSearchState } from '@/presetations/components/atoms/atoms'
import { useHistory } from 'react-router-dom'
import { GitSearchItems } from '@/domain/models'

type Props = {
  gitSearch?: GitSearch
}

const Home: React.FC<Props> = ({ gitSearch }: Props) => {
  const [state, setState] = useRecoilState(searchInput)
  const { setCurrentGitSearch, getCurrentGitSearch } = useRecoilValue(currentGitSearchState)
  const history = useHistory()

  const conectSearch = async (value?: string): Promise<void> => {
    try {
      const search = await gitSearch.search({ q: value, perPage: 10 })
      setCurrentGitSearch({ search: value })
      setState(old => ({ ...old, isLoading: false, searchList: search.items, isFormInvalid: false }))
    } catch (error) {
      setState(old => ({ ...old, isLoading: false, searchList: [], isFormInvalid: true }))
    }
  }

  const hasChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState(old => ({ ...old, search: event.target.value }))
    setCurrentGitSearch({ search: event.target.value })
  }

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState(old => ({ ...old, isLoading: true }))
    await conectSearch(state.search)
  }

  const handleProfile = (profile: GitSearchItems): void => {
    setCurrentGitSearch({ ...getCurrentGitSearch(), profile })
    history.replace(`/profile/${profile.login}`)
  }

  const listProfile = (): React.ReactNode => {
    return state.searchList.map((searchItem: GitSearchItems) => <ProfileCard
      key={searchItem.id}
      onClick={() => handleProfile(searchItem)}
      avatarUrl={searchItem.avatar_url}
      admin={searchItem.site_admin}
      login={searchItem.login}
      name={searchItem.login}
    />)
  }

  useEffect(() => {
    if (getCurrentGitSearch()?.search) {
      setState(old => ({ ...old, search: getCurrentGitSearch().search }))
      conectSearch(getCurrentGitSearch().search)
    }
  }, [])

  return (
    <>
      <S.FormContainer data-testid="form" onSubmit={handleSearch}>
        <Input
          searchInput={state.search}
          error={state.isFormInvalid}
          onChange={hasChangeInput} />
        <Button isLoading={false} />
      </S.FormContainer>

      {state.isLoading
        ? <ProfileCardLoading />
        : listProfile()}
    </>
  )
}

export default Home
