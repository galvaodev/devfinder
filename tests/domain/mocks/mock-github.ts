import { GitSearchInputModel } from '@/domain/models'

import faker from 'faker'

export const mockGitubModel = (): GitSearchInputModel => ({
  profile: {
    avatar_url: faker.image.abstract(),
    events_url: faker.image.business(),
    followers_url: faker.image.business(),
    following_url: faker.image.business(),
    gists_url: faker.image.business(),
    gravatar_id: faker.datatype.uuid(),
    html_url: faker.image.abstract(),
    id: faker.datatype.number(100),
    login: faker.fake('user'),
    node_id: faker.datatype.uuid(),
    organizations_url: faker.image.business(),
    received_events_url: faker.image.business(),
    repos_url: faker.image.business(),
    score: faker.datatype.number(100),
    site_admin: faker.datatype.boolean(),
    starred_url: faker.image.business(),
    subscriptions_url: faker.image.business(),
    type: faker.fake('type'),
    url: faker.image.business()
  }
})
