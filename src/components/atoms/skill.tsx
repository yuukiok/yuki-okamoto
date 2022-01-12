import { NextPage } from 'next'

type Props = {
  url: JSX.Element
  skill: string
}
export const Skill: NextPage<Props> = ({ url, skill }) => {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center">{url}</div>
      <div className="flex justify-center items-center">{skill}</div>
    </div>
  )
}
