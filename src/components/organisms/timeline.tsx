import { NextPage } from 'next'
import { internships, schools, volunteers } from '../../utils/carrier'
import { Time } from '../molecules/time'

type Props = {
  theme: string
}

export const Timeline: NextPage<Props> = ({ theme }) => {
  return (
    <div className="container mx-auto px-5">
      <section>
        <p className="text-xl md:text-4xl font-extrabold border-b-4 w-fit mb-3">
          Experience
        </p>
        <div className="relative">
          <div className="border-r-4 border-black absolute h-full top-0 ml-2" />
          <div className="list-none m-0 p-0">
            {internships &&
              internships.map((intern, index) => (
                <Time
                  key={index}
                  theme={theme}
                  icon={intern.icon}
                  title={intern.title}
                  from_date={intern.from_date}
                  to_date={intern.to_date}
                  url={intern.url}
                >
                  {intern.children}
                </Time>
              ))}
          </div>
        </div>
      </section>
      <section>
        <p className="text-xl md:text-4xl font-extrabold border-b-4 w-fit mb-3">
          Education
        </p>
        <div className="relative">
          <div className="border-r-4 border-black absolute h-full top-0 ml-2" />
          <div className="list-none m-0 p-0">
            {schools &&
              schools.map((school, index) => (
                <Time
                  key={index}
                  theme={theme}
                  icon={school.icon}
                  title={school.title}
                  from_date={school.from_date}
                  to_date={school.to_date}
                  url={school.url}
                >
                  {school.children}
                </Time>
              ))}
          </div>
        </div>
      </section>
      <section>
        <p className="text-xl md:text-4xl font-extrabold border-b-4 w-fit mb-3">
          Volunteering
        </p>
        <div className="relative">
          <div className="border-r-4 border-black absolute h-full top-0 ml-2" />
          <div className="list-none m-0 p-0">
            {volunteers &&
              volunteers.map((volunteer, index) => (
                <Time
                  key={index}
                  theme={theme}
                  icon={volunteer.icon}
                  title={volunteer.title}
                  from_date={volunteer.from_date}
                  to_date={volunteer.to_date}
                  url={volunteer.url}
                >
                  {volunteer.children}
                </Time>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
