import React, { useState } from 'react'
import { Input } from '@/presetations/components/Input'
import Button from '@/presetations/components/button'
import * as S from './styles'

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    console.log(searchInput)
  }

  return (
    <>
      <S.FormContainer onSubmit={handleSearch}>
        <Input
          searchInput={searchInput}
          error={false}
          setSearchInput={setSearchInput} />
        <Button isLoading={false} />
      </S.FormContainer>
    </>
  )
}

export default Home
