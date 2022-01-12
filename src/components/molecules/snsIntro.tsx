import { NextPage } from 'next'
import { Github, Linkedin, Twitter } from '../atoms/sns'

type Props = {
  id: string
  theme: string
  snsType: SNS
}

export enum SNS {
  GitHub,
  LinkedIn,
  Twitter,
}

export const SnsIntro: NextPage<Props> = ({ id, theme, snsType }) => {
  return (
    <div className="w-fit">
      {snsType === SNS.GitHub ? (
        <a
          href="https://github.com/YukiOkamoto0206"
          target="_blank"
          className="flex justify-center items-center hover:scale-110"
          rel="noopener noreferrer"
        >
          <div className="flex gap-x-2 mt-2">
            <Github theme={theme} />
            <div className="flex justify-center items-center font-medium">
              {id}
            </div>
          </div>
        </a>
      ) : snsType === SNS.LinkedIn ? (
        <a
          href="https://www.linkedin.com/in/yuki-okamoto-ca/"
          target="_blank"
          className="flex justify-center items-center hover:scale-110"
          rel="noopener noreferrer"
        >
          <div className="flex gap-x-2 mt-2">
            <Linkedin theme={theme} />
            <div className="flex justify-center items-center font-medium">
              {id}
            </div>
          </div>
        </a>
      ) : snsType === SNS.Twitter ? (
        <a
          href="https://twitter.com/yuki_0206_cs"
          target="_blank"
          className="flex justify-center items-center hover:scale-110"
          rel="noopener noreferrer"
        >
          <div className="flex gap-x-2 mt-2">
            <Twitter theme={theme} />
            <div className="flex justify-center items-center font-medium">
              {id}
            </div>
          </div>
        </a>
      ) : (
        <></>
      )}
    </div>
  )
}
