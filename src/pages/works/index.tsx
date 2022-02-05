import { GetStaticProps, NextPage } from 'next'
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient'
import Work from '../../components/organisms/work'
import Image from 'next/image'
import Spacer from '../../components/layout/spacer'

function GraphCMSImageLoader({ src, width }: any) {
  const relativeSrc = (src: any) => src.split('/').pop()
  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`
}

type Props = {
  work: Work[]
}
type Work = {
  id: string
  title: string
  image: Image
}
type Image = {
  url: string
  width: number
  height: number
}

const Index: NextPage<Props> = ({ work }) => {
  const works = work
  console.log(works)
  return (
    <Spacer>
      <div className="pt-20 mx-auto">
        {works &&
          works.map((work: Work) => {
            return (
              <div key={work.id} className="grid-x-2">
                <Image
                  loader={GraphCMSImageLoader}
                  src={work.image.url}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <div className="font-semibold text-lg mx-auto">
                  {work.title}
                </div>
              </div>
            )
          })}
      </div>
    </Spacer>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client_works.query(GET_WORKS_DATA).toPromise()
  const work = data.work
  return {
    props: {
      work,
    },
    revalidate: 10,
  }
}
