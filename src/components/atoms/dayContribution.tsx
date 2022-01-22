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
  return (
    <div>
      <div
        className={`peer relative h-4 w-4 my-1 ml-1 bg-green-${
          color == Color.NONE
            ? '0'
            : color == Color.FIRST_QUARTILE
            ? '100'
            : color == Color.SECOND_QUARTILE
            ? '200'
            : color == Color.THIRD_QUARTILE
            ? '300'
            : '400'
        } rounded-sm`}
      ></div>
      <div className="absolute invisible peer-hover:visible z-10 bg-gray-400 px-1 py-0.5 rounded-md text-sm text-center">
        <div>{contributionCount} contributions</div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default DayContribution
