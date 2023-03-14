import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    axios
      .post(`https://local.kellby.me/login`, {
        email: `wiza.amelia@example.com`,
        password: `password`,
      })
      .then((res) => {
        if (res.status === 204) {
          axios.get(`/api/user`).then((res) => console.log(res))
        }
      })
  }, [])

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Hello</p>
    </div>
  )
}

export default Home
