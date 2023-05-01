import { ProfileCard } from '@/presetations/components/profileCard'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  id: string
}

const profile: React.FC = () => {
  const { id } = useParams<Props>()

  return (
    <>
      {id}
      <ProfileCard
        avatarUrl="https://avatars.githubusercontent.com/u/28438?v=4"
        followers={2}
        following={2}
        htmlUrl="aa"
        location="aa"
        login="aa"
        name="aa"
        reposQuantity="aa"
        twitterUsername='aa'
        createdAt="2008-10-10T17:43:59Z"
      />
    </>
  )
}

export default profile
