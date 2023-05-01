export interface UserGithubProfile {
  name: string
  avatarUrl: string
  login: string
  followers: number
  following: number
  twitterUsername: string
  location: string
  htmlUrl: string
  reposQuantity: string
  createdAt: string
}

export type UserState = {
  user: UserGithubProfile
  error: boolean
  loading: boolean
}

export enum UserActionTypes {
  REQUEST_USER = '@user/REQUEST_USER',
  SUCCESS_USER = '@user/SUCCESS_USER',
  FAILURE_USER = '@user/FAILURE_USER'
}
