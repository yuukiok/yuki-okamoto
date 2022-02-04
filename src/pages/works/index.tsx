import { GetStaticProps, NextPage } from 'next'
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient'
import Work from '../../components/organisms/work'

const Index: NextPage<any> = ({ data }) => {
  const works = data.work
  console.log(works)
  return (
    <div className="pt-20">
      {works && works.map((work: any) => <Work key={work.id} {...work} />)}
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
