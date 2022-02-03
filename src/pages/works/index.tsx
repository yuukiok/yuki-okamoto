import { GetStaticProps, NextPage } from 'next'
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient'

const Index: NextPage<any> = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div className="font-bold text-4xl flex justify-center pt-48 h-screen">
        Under Construction
      </div>
    </div>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client_works.query(GET_WORKS_DATA).toPromise()
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
