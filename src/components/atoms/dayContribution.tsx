type Props = {
  color: string
  contributionCount: number
  date: string
}

const DayContribution: React.FC<any> = () => {
  return (
    <div>
      <div className="peer relative h-4 w-4 my-1 ml-1 bg-green-400 rounded-sm"></div>
      <div className="absolute invisible peer-hover:visible z-10 bg-gray-400 px-1 py-0.5 rounded-md text-sm">
        <div>2 contributions on Jan 10, 2020</div>
      </div>
    </div>
  )
}

export default DayContribution
