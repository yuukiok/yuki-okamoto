import { NextPage } from 'next'

const Hero: NextPage = () => {
  return (
    <div className="text-4xl md:text-9xl font-extrabold md:mt-3">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 text-center">
        {"Hey, I'm YUKI"}
      </div>
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 text-center">
        A Software Engineer
      </div>
    </div>
  )
}

export default Hero
