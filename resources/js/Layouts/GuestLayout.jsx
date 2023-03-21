import { AppShell, useMantineTheme } from '@mantine/core'

import { Header } from '@Components/Base/Header'
import { Footer } from '@Components/Base/Footer'

const GuestLayout = ({ children }) => {
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
      footer={<Footer />}
    >
      {children}
    </AppShell>
  )
}

export default GuestLayout
