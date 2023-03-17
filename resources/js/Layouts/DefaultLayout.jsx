import { Link } from '@inertiajs/react'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/register">Register</Link>
      </nav>

      {children}
    </>
  )
}

export default DefaultLayout
