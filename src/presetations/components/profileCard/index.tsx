import { Buildings, Link, MapPin, TwitterLogo } from 'phosphor-react'
import { UserGithubProfile } from '@/types/types'
import * as S from './styles'
import React from 'react'

export const ProfileCard: React.FC<UserGithubProfile> = ({
  avatarUrl,
  followers,
  following,
  htmlUrl,
  location,
  login,
  name,
  reposQuantity,
  twitterUsername,
  createdAt
}) => {
  const date = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(createdAt))

  const day = date.split(',')[0].split(' ')[1]
  const month = date.split(',')[0].split(' ')[0]
  const year = date.split(',')[1]

  return (
    <S.ProfileCardContainer>
      <S.ProfilePhoto src={avatarUrl} alt="avatar" />
      <S.ProfileInformations>
        <S.ProfileHeader>
          <S.UserContent>
            <S.UserName>{name}</S.UserName>
            <S.UserShortName>@{login}</S.UserShortName>
            <S.AccountCreationDate>Joined {day} {month} {year}</S.AccountCreationDate>
          </S.UserContent>
        </S.ProfileHeader>
        <S.UserBio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</S.UserBio>

        <S.ProfileNumbers>
          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Repos</S.InfoTitle>
            <S.Quantity>{reposQuantity}</S.Quantity>
          </S.ProfileNumbersInfoContent>

          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Followers</S.InfoTitle>
            <S.Quantity>{followers}</S.Quantity>
          </S.ProfileNumbersInfoContent>

          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Following</S.InfoTitle>
            <S.Quantity>{following}</S.Quantity>
          </S.ProfileNumbersInfoContent>
        </S.ProfileNumbers>

        <S.SocialMediasContainer>
          <S.SocialMedia>
            <MapPin size={20} />
            <S.Description>{location ?? 'Not Available'}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <TwitterLogo size={20} />
            <S.Description>{twitterUsername ?? 'Not Available'}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <Link size={20} />
            <S.Description>{htmlUrl}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <Buildings size={20} />
            <S.Description>@github</S.Description>
          </S.SocialMedia>
        </S.SocialMediasContainer>
      </S.ProfileInformations>
    </S.ProfileCardContainer>
  )
}
