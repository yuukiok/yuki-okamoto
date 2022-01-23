import { createClient } from 'urql'

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
export const GET_CURRENT_USER = `
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
