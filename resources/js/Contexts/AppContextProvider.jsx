import { ComposeComponents } from '@Components/ComposeComponents'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { AuthContextProvider } from './AuthContext'
import { NavigationContextProvider } from './NavigationContextProvider'

const queryClient = new QueryClient()

export const AppContextProvider = ({ children }) => {
  const providers = [AuthContextProvider, NavigationContextProvider]

  return (
    <MantineProvider
      theme={{ colorScheme: `dark` }}
      withGlobalStyles
      withNormalizeCSS
    >
      <QueryClientProvider client={queryClient}>
        {[`local`, `qa`].includes(import.meta.env.VITE_APP_ENV) ? (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        ) : null}
        <ComposeComponents components={[...providers]}>
          <ModalsProvider>
            <Notifications />

            {children}
          </ModalsProvider>
        </ComposeComponents>
      </QueryClientProvider>
    </MantineProvider>
  )
}
