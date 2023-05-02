import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

type inputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchInput: string
  error: boolean
}

const Input: React.FC<inputProps> = ({ searchInput, onChange, error }) => {
  return (
    <S.WrapperInput>
      <MagnifyingGlass size={32} />
      <S.InputStyled
        value={searchInput}
        placeholder="Search GitHub username..."
        maxLength={30}
        onChange={(e) => onChange(e)}
      />
      {error && <S.ErrorMessage>No results</S.ErrorMessage>}
    </S.WrapperInput>
  )
}

export default Input
