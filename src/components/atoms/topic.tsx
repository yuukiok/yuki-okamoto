import { NextPage } from 'next'

type Props = {
  title: string
}

const Topic: NextPage<Props> = ({ title }) => {
  return (
    <div className="border-b-4 w-fit text-xl font-bold border-black dark:border-lighttheme">
      {title}
    </div>
  )
}

export default Topic
