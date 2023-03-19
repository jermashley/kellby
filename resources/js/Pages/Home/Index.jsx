import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import AuthenticatedLayout from '@Layouts/AuthenticatedLayout'

const Home = () => {
  return (
    <AuthenticatedLayout>
      <p className="text-lg text-zinc-700">Hello</p>
    </AuthenticatedLayout>
  )
}

export default Home
