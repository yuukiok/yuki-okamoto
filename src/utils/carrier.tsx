import { IconImage } from '../components/molecules/time'
export const internships = [
  {
    icon: IconImage.COMPANY,
    title: 'Citigroup Inc.',
    from_date: 'Jun 2023',
    to_date: 'Present',
    url: 'https://www.citigroup.jp/en/',
    children: <div>Summer Analyst in the Technology department.</div>,
  },
  {
    icon: IconImage.COMPANY,
    title: 'WealthPark, Inc.',
    from_date: 'Aug 2022',
    to_date: 'May 2023',
    url: 'https://wealth-park.com/en/lp-product-us/',
    children: <div>Frontend Engineer.</div>,
  },
  {
    icon: IconImage.COMPANY,
    title: 'Rakuten Group, Inc.',
    from_date: 'July 2022',
    to_date: '',
    url: 'http://global.rakuten.com/corp/',
    children: (
      <div>
        Backend Engineer at{' '}
        <span>
          <a
            href="https://payment.rakuten.co.jp/en/"
            className="hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rakuten Payment
          </a>
        </span>
        .
      </div>
    ),
  },
  {
    icon: IconImage.COMPANY,
    title: 'CyberAgent, Inc.',
    from_date: 'Jun 2022',
    to_date: '',
    url: 'https://www.cyberagent.co.jp/en/',
    children: (
      <div>
        Frontend Engineer at{' '}
        <span>
          <a
            href="https://cam-inc.co.jp/"
            className="hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            CAM
          </a>
        </span>
        .
      </div>
    ),
  },
  {
    icon: IconImage.COMPANY,
    title: 'Crunchtimer, Inc.',
    from_date: 'Jun 2020',
    to_date: 'May 2022',
    url: 'https://www.crunchtimer.jp/',
    children: <div>Frontend and Mobile Application Engineer.</div>,
  },
]

export const schools = [
  {
    icon: IconImage.SCHOOL,
    title: 'California State University, Monterey Bay',
    from_date: 'Jan 2022',
    to_date: 'Present',
    url: 'https://csumb.edu/',
    children: (
      <div>
        Candidate for Bachelor of Science in Computer Science, expected to
        graduate in December 2023.
      </div>
    ),
  },
  {
    icon: IconImage.SCHOOL,
    title: 'Palomar College',
    from_date: 'Aug 2019',
    to_date: 'Dec 2021',
    url: 'https://www2.palomar.edu/',
    children: <div>Community college majoring in Computer Science.</div>,
  },
]

export const volunteers = [
  {
    icon: IconImage.COMPANY,
    title: 'LATIN ADVOCACY NETWORK.',
    from_date: 'Feb 2023',
    to_date: 'May 2023',
    url: 'https://www.latinan.org/',
    children: <div>Backend Engineer.</div>,
  },
  {
    icon: IconImage.COMPANY,
    title: 'dKomplex, Inc.',
    from_date: 'Feb 2022',
    to_date: 'May 2022',
    url: 'https://www.dkomplex.com/',
    children: <div>Data Scientist.</div>,
  },
]
