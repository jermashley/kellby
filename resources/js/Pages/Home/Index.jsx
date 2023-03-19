import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import DefaultLayout from '@Layouts/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <p className="text-lg text-zinc-700">Hello</p>
    </DefaultLayout>
  )
}

export default Home
