export interface UserGithubProfile {
  admin?: boolean
  avatarUrl?: string
  login?: string
  name?: string
  htmlUrl?: string
  onClick?: () => void
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
