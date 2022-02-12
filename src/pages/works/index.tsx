import { GetStaticProps, NextPage } from 'next'
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient'
import Work from '../../components/organisms/work'
import Image from 'next/image'
import Spacer from '../../components/layout/spacer'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  url: string
  image: Image
}
type Image = {
  url: string
  width: number
  height: number
}

const Index: NextPage<Props> = ({ work }) => {
  const works = work
  // const router = useRouter()
  return (
    <Spacer>
      <div className="pt-20 text-xl md:text-5xl font-extrabold border-b-4 w-fit pb-1">
        Works
      </div>
      <ul className="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works &&
          works.map((work: Work) => {
            return (
              <li key={work.id} className="hover:scale-110 mx-auto">
                <Link href={work.url}>
                  <a target="_blank">
                    <Image
                      loader={GraphCMSImageLoader}
                      src={work.image.url}
                      priority={true}
                      quality={10}
                      width={300}
                      height={200}
                      className="rounded-lg"
                      alt="portfolio image"
                    />
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
