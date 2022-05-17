import { NextPage } from 'next'
import { carriers } from '../../utils/carrier'
import { Time, IconImage } from '../molecules/time'

type Props = {
  theme: string
}

export const Timeline: NextPage<Props> = ({ theme }) => {
  return (
    <div className="container mx-auto px-5">
      <div className="relative">
        <div className="border-r-4 border-black absolute h-full top-0 ml-2" />
        <div className="list-none m-0 p-0">
          {carriers &&
            carriers.map((carrier) => (
              <Time
                theme={theme}
                icon={carrier.icon}
                title={carrier.title}
                from_date={carrier.from_date}
                to_date={carrier.to_date}
                url={carrier.url}
              >
                {carrier.children}
              </Time>
            ))}
        </div>
      </div>
    </div>
  )
}
