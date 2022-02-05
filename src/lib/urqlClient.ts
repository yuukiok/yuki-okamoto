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
  url: process.env.NEXT_PUBLIC_GRAPHCMS_API as string,
})

export const GET_WORKS_DETAILS = gql`
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

export const GET_WORKS_DATA = gql`
  query MyQuery {
    work(orderBy: id_DESC) {
      id
      title
      image {
        url
        width
        height
      }
    }
  }
`
