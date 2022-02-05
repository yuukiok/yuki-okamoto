import { GetStaticProps, NextPage } from 'next'
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient'
import Work from '../../components/organisms/work'
import Image from 'next/image'
import Spacer from '../../components/layout/spacer'
import Link from 'next/link'

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
      <ul className="pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works &&
          works.map((work: Work) => {
            return (
              <li key={work.id} className="hover:scale-110">
                <Link href="https://google.com">
                  <a>
                    <div className="">
                      <Image
                        loader={GraphCMSImageLoader}
                        src={work.image.url}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="font-semibold text-lg text-center">
                      {work.title}
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
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
