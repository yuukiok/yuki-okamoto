import { NextPage } from 'next'
import Image from 'next/image'

type Props = {
  theme: string
}

export const Github: NextPage<Props> = ({ theme }) => {
  return (
    <Image
      src={`/snsIcon/${theme === 'dark' ? 'white_' : 'black_'}github.svg`}
      width={30}
      height={30}
    />
  )
}

export const Linkedin: NextPage<Props> = ({ theme }) => {
  return (
    <Image
      src={`/snsIcon/${theme === 'dark' ? 'white_' : 'black_'}linkedin.svg`}
      width={30}
      height={30}
    />
  )
}

export const Twitter: NextPage<Props> = ({ theme }) => {
  return (
    <Image
      src={`/snsIcon/${theme === 'dark' ? 'white_' : 'black_'}twitter.svg`}
      width={30}
      height={30}
    />
  )
}
