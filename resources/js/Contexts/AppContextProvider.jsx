import { ComposeComponents } from '@Components/ComposeComponents'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthContextProvider } from './AuthContext'
import { NavigationContextProvider } from './NavigationContextProvider'

export const AppContextProvider = ({ children }) => {
  const queryClient = new QueryClient()

  const providers = [AuthContextProvider, NavigationContextProvider]

  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <QueryClientProvider client={queryClient}>
        {[`local`, `qa`].includes(import.meta.env.VITE_APP_ENV) ? (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        ) : null}
        <ComposeComponents components={[...providers]}>
          <Notifications />

          {children}
        </ComposeComponents>
      </QueryClientProvider>
    </MantineProvider>
  )
}
