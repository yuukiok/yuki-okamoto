import { NextPage } from 'next'
import { useQuery } from 'urql'
import { withUrqlClient } from 'next-urql'
import Image from 'next/image'

// const GET_CURRENT_USER = `
//   query {
//     viewer {
//       login
//       name
//       bio
//       avatarUrl

//     }
//   }
// `
const userName = 'YukiOkamoto0206'

const GET_CURRENT_USER = `
  query {
    user(login: "YukiOkamoto0206"){
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              date
            }
          }
        }
      }
    }
  }
`

const Index: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_CURRENT_USER })
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  const weekWeed = data.user.contributionsCollection.contributionCalendar.weeks
  const numWeeks = weekWeed.length // 53
  console.log(weekWeed)
  const numDays = weekWeed[0].contributionDays.length // 7
  console.log(numDays)
  // const dayWeed = weekWeed.contributionDays[0]
  // console.log(dayWeed)
  // const url = data.viewer.avatarUrl

  return (
    <div className="w-screen h-screen">
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
      {/* params */}
      {/* List of 53 column */}
    </div>
  )
}

export default Index
