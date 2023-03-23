import { AppShell, MediaQuery, useMantineTheme } from '@mantine/core'
import { Navigation } from '@Components/Base/Navigation'

import { Header } from '@Components/Base/Header'
import { Footer } from '@Components/Base/Footer'

const AuthenticatedLayout = ({ children }) => {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={<Header />}
      navbar={<Navigation />}
      // footer={<Footer />}
    >
      {children}
    </AppShell>
  )
}

export default AuthenticatedLayout
