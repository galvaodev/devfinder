import { MagnifyingGlass } from 'phosphor-react'
import React, { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

type inputProps = {
  setSearchInput: Dispatch<SetStateAction<string>>
  searchInput: string
  error: boolean
}

export const Input: React.FC<inputProps> = ({ searchInput, setSearchInput, error }) => {
  return (
    <S.WrapperInput>
      <MagnifyingGlass size={32} />
      <S.InputStyled
        value={searchInput}
        placeholder="Search GitHub username..."
        maxLength={30}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {error && <S.ErrorMessage>No results</S.ErrorMessage>}
    </S.WrapperInput>
  )
}
