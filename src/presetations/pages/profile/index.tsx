import { ProfileCard } from '@/presetations/components'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentGitSearchState } from '@/presetations/components/atoms/atoms'
import { GitSearchItems } from '@/domain/models'

import * as S from './styles'

const profile: React.FC = () => {
  const history = useHistory()
  const { getCurrentGitSearch } = useRecoilValue(currentGitSearchState)
  const [profile] = useState<GitSearchItems>({ ...getCurrentGitSearch().profile })

  return (
    <>
      <ProfileCard
        avatarUrl={profile.avatar_url}
        htmlUrl={profile.html_url}
        login={profile.login}
      />
      <S.Button onClick={() => history.replace('/')}>voltar</S.Button>
    </>
  )
}

export default profile
