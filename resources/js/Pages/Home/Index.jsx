import DefaultLayout from '@Layouts/DefaultLayout'
import axios from 'axios'

const Home = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen w-full">
        <p className="text-lg text-zinc-700">Hello</p>
      </div>
    </DefaultLayout>
  )
}

export default Home
