import DayContribution from '../atoms/dayContribution'

// type Props = {
//   contributionDays: string
// }

const WeekContributions: React.FC<any> = ({ contributionDays }) => {
  return (
    <div>
      {contributionDays.map((day: any) => {
        return <DayContribution key={day.date} {...day} />
      })}
    </div>
  )
}
export default WeekContributions
