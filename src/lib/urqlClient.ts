import {
  createClient,
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })
const client = createClient({
  url: GITHUB_BASE_URL,
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  },
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})
export { client, ssrCache }

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
