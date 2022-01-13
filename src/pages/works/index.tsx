import { NextPage } from 'next'

const Index: NextPage = () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  console.log(token)
  return (
    <div className="w-screen h-screen">
      <div className="font-bold text-4xl flex justify-center pt-48">
        Under Construction
      </div>
    </div>
  )
}
export default Index
