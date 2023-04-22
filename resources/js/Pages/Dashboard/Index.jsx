import { useTeamsQuery } from '@Hooks/Queries/Team'

const DashboardIndex = () => {
  const teams = useTeamsQuery()

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Dashboard</p>
    </div>
  )
}

export default DashboardIndex
