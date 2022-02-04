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
  // fetchOptions: () => {
  //   return {
  //     headers: {
  //       authorization:
  //         'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdyYXBoY21zLmNvbS8iLCJzdWIiOiJnaXRodWJ8NzU0ODI2OTgiLCJhdWQiOiI4VldTZHlVaHRaVDQzbkFpcHIyZmpLUmhqSm1wOHNZeSIsImlhdCI6MTY0MzcwODAzNSwiZXhwIjoxNjQ0MzEyODM1LCJub25jZSI6ImdyUnd6NVZjNkFWOUd5dW9-emVadjVVQ09HQURWR3dOIn0.J0U0Sd1mv9wvvwT6nlck3lqK7VlSjmZj9GkjU2NK0Wjo8w6dEe4uYarXtM6ChfbVgfMmi8mrrhv4VySTIdokA-NzxVVFtdVoe3tnXMZXtmuGxtlp2bx53Ko6s9-zcj3op9rTEF_ytQaV0XE9QBuPZof4FvnPLd66b54Qf_PWMcetVUkUymSHfwrzDpqWkGkp7a-dvMnC5yy7UNTrFE9PRtRX0IFGNeqD9ii4MS6fP81uWOda0d8rWr9OlyBYFuO_eofB2J0zIkQjFdsY3QL-0cnMduXaofjm3woUNe_xo1KJzOV6ML40R5cXBbafw1NpdS0pKw0IciinSLlixJMJZA',
  //     },
  //   }
  // },
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
    work {
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
