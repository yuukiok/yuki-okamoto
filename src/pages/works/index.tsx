import { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`

const Index: NextPage = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  console.log(data)

  return (
    <div className="w-screen h-screen">
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
    </div>
  )
}
export default Index
