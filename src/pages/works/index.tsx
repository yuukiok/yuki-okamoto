import { NextPage } from 'next'
import { useQuery } from 'urql'
import { withUrqlClient } from 'next-urql'
import Image from 'next/image'

const GET_CURRENT_USER = `
  query {
    viewer {
      login
      name
      bio
      avatarUrl
    }
  }
`

const Index: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_CURRENT_USER })
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  console.log(data)
  const url = data.viewer.avatarUrl

  return (
    <div className="w-screen h-screen">
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
      <Image src={url} width={100} height={100} />
    </div>
  )
}

export default Index
