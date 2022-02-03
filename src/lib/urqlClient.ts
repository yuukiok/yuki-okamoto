import { createClient, gql } from 'urql'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

export const client = createClient({
  url: GITHUB_BASE_URL,
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  },
})

const userName = 'YukiOkamoto0206'
export const GET_CURRENT_USER = gql`
  query {
    user(login: "${userName}"){
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            firstDay
            contributionDays {
              color
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

export const client_works = createClient({
  url: 'https://api-us-west-2.graphcms.com/v2/ckyqvjyi41aye01xx7pzu4fqq/master',
})

export const GET_WORKS_DATA = gql`
  query {
    work {
      id
      title
      image {
        documentInStages {
          url
        }
      }
      content {
        html
      }
    }
  }
`
