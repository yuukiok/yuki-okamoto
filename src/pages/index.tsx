import { useTheme } from 'next-themes'
import Hero from '../components/organisms/hero'
import Intro from '../components/organisms/intro'
import { Github, Linkedin, Twitter } from '../components/atoms/sns'
import { Timeline } from '../components/organisms/timeline'
import { SEOHead } from '../components/organisms/seohead'
import { useRouter } from 'next/router'
import { Skills } from '../components/organisms/skills'
import Spacer from '../components/layout/spacer'
import Topic from '../components/atoms/topic'

export default function Home() {
  const { theme } = useTheme()
  const color = theme == undefined ? 'dark' : theme
  const router = useRouter()
  const url = router.asPath

  return (
    <>
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
      </Spacer>
    </>
  )
}
