import { NextPage } from 'next'
import { useQuery } from 'urql'
import { withUrqlClient } from 'next-urql'
import Image from 'next/image'
import DayContribution from '../../components/atoms/dayContribution'
import WeekContributions from '../../components/molecules/weekContributions'
import Spacer from '../../components/layout/spacer'

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

const Index: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_CURRENT_USER })
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  const weeksWeed = data.user.contributionsCollection.contributionCalendar.weeks
  const numWeeks = weeksWeed.length // 53
  // console.log(weeksWeed)
  const numDays = weeksWeed[0].contributionDays.length // 7
  // console.log(numDays)
  // const dayWeed = weekWeed.contributionDays[0]
  // console.log(dayWeed)
  // const url = data.viewer.avatarUrl
  const num = 10

  return (
    <div className="">
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
      {/* params */}
      {/* List of 53 column */}
      <Spacer>
        <div className="flex overflow-x-auto">
          {weeksWeed.map((weekWeed: any) => (
            <WeekContributions key={weekWeed.firstDay} {...weekWeed} />
          ))}
        </div>
      </Spacer>
    </div>
  )
}

export default Index
