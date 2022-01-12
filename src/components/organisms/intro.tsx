import { NextPage } from 'next'
import Image from 'next/image'
import { SnsIntro, SNS } from '../molecules/snsIntro'

type Props = {
  theme: string
}

const Intro: NextPage<Props> = ({ theme }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center md:hidden">
        <Image
          src="/my_icon.jpg"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="justify-center items-center hidden md:flex">
        <Image
          src="/my_icon.jpg"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="w-fit mx-auto my-1">
        <SnsIntro id="@YukiOkamoto0206" theme={theme} snsType={SNS.GitHub} />
        <SnsIntro id="@yuki-okamoto-ca" theme={theme} snsType={SNS.LinkedIn} />
        <SnsIntro id="@yuki_0206_cs" theme={theme} snsType={SNS.Twitter} />
      </div>
    </div>
  )
}

export default Intro
