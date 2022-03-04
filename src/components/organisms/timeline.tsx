import { NextPage } from 'next'
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
          <Time
            theme={theme}
            icon={IconImage.COMPANY}
            title="dKomplex"
            from_date="Feb 2022"
            to_date="Present"
            url="https://www.dkomplex.com/"
          >
            <div>
              Developer Intern to support the group of a veteran-owned startup
              by converting business processes and requirements into software
              updates
            </div>
          </Time>
          <Time
            theme={theme}
            icon={IconImage.SCHOOL}
            title="California State University, Monterey Bay"
            from_date="Jan 2022"
            to_date="Present"
            url="https://csumb.edu/"
          >
            <div>
              Candidate for Bachelor of Science in Computer Science, expected to
              graduate in December 2023.
            </div>
          </Time>
          <Time
            theme={theme}
            icon={IconImage.COMPANY}
            title="Crunchtimer Inc"
            from_date="Jun 2020"
            to_date="Present"
            url="https://www.crunchtimer.jp/"
          >
            <ul className="list-disc ml-3 md:ml-1">
              <li>
                Experience as a Front end web developer in developing and
                designing user experiences of web applications and mobile
                applications.
              </li>
              <li>
                Experience in all phase of SDLC like Requirement Analysis,
                Implementation and Maintenance, and experience with Waterfall,
                Agile and SCRUM.
              </li>
            </ul>
          </Time>
          <Time
            theme={theme}
            icon={IconImage.SCHOOL}
            title="Palomar College"
            from_date="Aug 2019"
            to_date="Dec 2021"
            url="https://www2.palomar.edu/"
            isDone={true}
          >
            <div>
              Completed requirements to transfer to California State University
              in Computer Science.
            </div>
          </Time>
        </div>
      </div>
    </div>
  )
}
