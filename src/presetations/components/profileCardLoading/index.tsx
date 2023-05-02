import * as S from '@/presetations/components/profileCard/styles'
import { SkeletonLoading } from '@/presetations/components'
import React from 'react'

const ProfileCardLoading: React.FC = () => {
  return (
    <S.ProfileCardContainer>
      <SkeletonLoading borderRadius='50%' width='80px' height='80px' mr="20px" />
      <S.ProfileInformations>
        <S.ProfileHeader>
          <S.UserContent>
            <SkeletonLoading width='50%' />
            <SkeletonLoading width='50%' mt="10px" />
            <SkeletonLoading width='50%' mt="10px" />
          </S.UserContent>
        </S.ProfileHeader>
        <SkeletonLoading height='40px' mt="30px" />

        <S.SocialMediasContainer>
          <S.SocialMedia>
            <SkeletonLoading width='90%' height='20px' />
          </S.SocialMedia>

          <S.SocialMedia>
            <SkeletonLoading width='90%' height='20px' />
          </S.SocialMedia>

          <S.SocialMedia>
            <SkeletonLoading width='90%' height='20px' />
          </S.SocialMedia>

          <S.SocialMedia>
            <SkeletonLoading width='90%' height='20px' />
          </S.SocialMedia>
        </S.SocialMediasContainer>
      </S.ProfileInformations>
    </S.ProfileCardContainer>
  )
}

export default ProfileCardLoading
