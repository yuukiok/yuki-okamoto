import { useTheme } from 'next-themes'
import Hero from '../components/organisms/hero'
import Intro from '../components/organisms/intro'
import { Timeline } from '../components/organisms/timeline'
import { SEOHead } from '../components/organisms/seohead'
import { useRouter } from 'next/router'
import { Skills } from '../components/organisms/skills'
import Spacer from '../components/layout/spacer'
import Topic from '../components/atoms/topic'
import { GetStaticProps } from 'next'
import { client, GET_CURRENT_USER } from '../lib/urqlClient'
import React, { useEffect } from 'react'
import WeekContributions from '../components/molecules/weekContributions'
import Link from 'next/link'

export default function Home({ data }: any) {
  const { theme } = useTheme()
  const color = theme == undefined ? 'dark' : theme
  const router = useRouter()
  const url = router.asPath
  const weeksWeed = data.user.contributionsCollection.contributionCalendar.weeks
  const totalContributions =
    data.user.contributionsCollection.contributionCalendar.totalContributions
  useEffect(() => {
    let target = document.getElementById('scroll-inner')
    target?.scrollTo(10000, 0)
  }, [])

  return (
    <div className="">
      <SEOHead title="Yuki Okamoto - Homepage" url={url} />
      <div className="pt-14"></div>
      <Hero />
      <div className="w-full md:flex mt-4 lg:mt-10">
        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
          <Intro theme={color} />
        </div>
        <div className="md:w-2/3 flex justify-center">
          <Timeline theme={color} />
        </div>
      </div>
      <Spacer>
        <Topic title="Skill" />
        <Skills />
        <div className="hidden lg:block">
          <Link href="https://github.com/YukiOkamoto0206">
            <a target="_blank" className="inline-block	">
              <Topic
                title={`${totalContributions} Contributions`}
                className="my-3"
              />
            </a>
          </Link>
          <div className="flex overflow-x-auto" id="scroll-inner">
            {weeksWeed.map((weekWeed: any) => (
              <WeekContributions key={weekWeed.firstDay} {...weekWeed} />
            ))}
          </div>
        </div>
      </Spacer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query(GET_CURRENT_USER).toPromise()
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
