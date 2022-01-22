type Props = {
  color: string
  contributionCount: number
  date: string
}

enum Color {
  NONE = '#ebedf0',
  FIRST_QUARTILE = '#9be9a8',
  SECOND_QUARTILE = '#40c463',
  THIRD_QUARTILE = '#30a14e',
  FOURTH_QUARTILE = '#216e39',
}

const DayContribution: React.FC<Props> = ({
  color,
  contributionCount,
  date,
}) => {
  const name_of_class = 'relative h-4 w-4 my-1 ml-1 rounded-sm'
  return (
    <div>
      <div className="peer">
        {color == Color.NONE ? (
          <div className={`bg-green-50 ${name_of_class}`} />
        ) : color == Color.FIRST_QUARTILE ? (
          <div className={`bg-green-100 ${name_of_class}`} />
        ) : color == Color.SECOND_QUARTILE ? (
          <div className={`bg-green-200 ${name_of_class}`} />
        ) : color == Color.THIRD_QUARTILE ? (
          <div className={`bg-green-300 ${name_of_class}`} />
        ) : (
          <div className={`bg-green-400 ${name_of_class}`} />
        )}
      </div>
      <div className="absolute invisible peer-hover:visible z-10 bg-gray-400 px-1 py-0.5 rounded-md text-sm text-center">
        <div>{contributionCount} contributions</div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default DayContribution
