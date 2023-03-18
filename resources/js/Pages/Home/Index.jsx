import DefaultLayout from '@Layouts/DefaultLayout'
import { Button } from '@mantine/core'
import axios from 'axios'

const Home = () => {
  return (
    <DefaultLayout>
      <p className="text-lg text-zinc-700">Hello</p>
      <Button
        onClick={() =>
          axios.post(`https://local.kellby.me/auth/login`, {
            email: `jane.doe@email.com`,
            password: `password`,
          })
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

      <Button onClick={() => axios.post(`https://local.kellby.me/auth/logout`)}>
        Log out
      </Button>
    </DefaultLayout>
  )
}

export default Home
