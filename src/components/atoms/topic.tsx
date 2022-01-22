import { NextPage } from 'next'

type Props = {
  title: string
  className?: string
}

const Topic: NextPage<Props> = ({ title, className }) => {
  return (
    <div
      className={`border-b-4 w-fit text-xl font-bold border-black dark:border-lighttheme ${className}`}
    >
      {title}
    </div>
  )
}

export default Topic
