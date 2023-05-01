import React from 'react'

import * as S from './styles'

type inputProps = {
  isLoading: boolean
}

const Button: React.FC<inputProps> = ({
  isLoading
}) => {
  return (
    <S.Button
      disabled={isLoading}
      isLoading={isLoading}
    >
      Search
    </S.Button>
  )
}

export default Button
