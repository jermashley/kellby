import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import DefaultLayout from '@Layouts/DefaultLayout'
import { Button } from '@mantine/core'
import axios from 'axios'

const Home = () => {
  const user = useUserQuery()
  const logout = useLogoutMutation()

  return (
    <DefaultLayout>
      <p className="text-lg text-zinc-700">Hello</p>
      <Button
        onClick={() =>
          axios
            .post(`https://local.kellby.me/auth/login`, {
              email: `jane.doe@email.com`,
              password: `password`,
            })
            .then(() => user.refetch())
        }
      >
        Log in
      </Button>

      <Button
        onClick={() =>
          axios
            .get(`https://local.kellby.me/api/user`)
            .then((res) => console.log(res))
        }
      >
        Get User
      </Button>

      <Button onClick={() => logout.mutate()}>Log out</Button>
    </DefaultLayout>
  )
}

export default Home
