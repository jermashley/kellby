import { Link } from '@inertiajs/react'
import { AppShell, Navbar, Header } from '@mantine/core'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="md">
            {/* Navbar content */}
          </Navbar>
        }
        header={
          <Header height={60} p="md">
            {/* Header content */}
            <Link href="/">Kellby</Link>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  )
}

export default DefaultLayout
