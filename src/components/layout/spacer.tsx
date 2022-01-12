import { NextPage } from 'next'

const Spacer: NextPage = ({ children }) => {
  return <div className="md:w-2/3 mx-auto px-5 pb-3 md:p-6">{children}</div>
}

export default Spacer
