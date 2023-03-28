import AuthenticatedLayout from '@Layouts/AuthenticatedLayout'
import { useUserQuery } from '@Hooks/Queries/user'

const DashboardIndex = () => {
  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Dashboard</p>
    </div>
  )
}

export default DashboardIndex
