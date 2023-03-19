import AuthenticatedLayout from '@Layouts/AuthenticatedLayout'

const DashboardIndex = () => {
  return (
    <AuthenticatedLayout>
      <div className="min-h-screen w-full">
        <p className="text-lg text-zinc-700">Dashboard</p>
      </div>
    </AuthenticatedLayout>
  )
}

export default DashboardIndex
