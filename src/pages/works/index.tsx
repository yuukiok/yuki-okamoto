import { NextPage } from 'next'
import { useQuery } from 'urql'
import WeekContributions from '../../components/molecules/weekContributions'
import Spacer from '../../components/layout/spacer'
import { useEffect } from 'react'

const userName = 'YukiOkamoto0206'

const GET_CURRENT_USER = `
  query {
    user(login: ${userName}){
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
  useEffect(() => {
    let target = document.getElementById('scroll-inner')
    target?.scrollTo(10000, 0)
  }, [])
  const [{ data, fetching, error }] = useQuery({ query: GET_CURRENT_USER })
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  const weeksWeed = data.user.contributionsCollection.contributionCalendar.weeks

  return (
    <div>
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
      <Spacer>
        <div className="flex overflow-x-auto" id="scroll-inner">
          {weeksWeed.map((weekWeed: any) => (
            <WeekContributions key={weekWeed.firstDay} {...weekWeed} />
          ))}
        </div>
      </Spacer>
    </div>
  )
}

export default Index
