import { Link } from 'phosphor-react'
import { UserGithubProfile } from '@/types/types'
import * as S from './styles'
import React from 'react'

const ProfileCard: React.FC<UserGithubProfile> = ({
  avatarUrl,
  admin,
  htmlUrl,
  login,
  onClick
}) => {
  const openInNewTab = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <S.ProfileCardContainer cursor={!!onClick} onClick={onClick}>
      <S.ProfilePhoto src={avatarUrl} alt="avatar" />
      <S.ProfileInformations>
        <S.ProfileHeader>
          <S.UserContent>
            <S.UserName>{login}</S.UserName>
            <S.UserShortName>@{login}</S.UserShortName>
            <S.UserShortName>Admin: {admin ? 'Sim' : 'Não'}</S.UserShortName>
          </S.UserContent>
        </S.ProfileHeader>
        {htmlUrl && (
          <S.SocialMediasContainer>
            <S.SocialMedia>
              <Link size={20} />
              <S.Description onClick={() => openInNewTab(htmlUrl)}>{htmlUrl}</S.Description>
            </S.SocialMedia>
          </S.SocialMediasContainer>
        )}
      </S.ProfileInformations>
    </S.ProfileCardContainer>
  )
}

export default ProfileCard
