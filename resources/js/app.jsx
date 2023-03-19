import { createInertiaApp } from '@inertiajs/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { AppContextProvider } from '@Contexts/AppContextProvider'

const queryClient = new QueryClient()

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

    let page = pages[`./Pages/${name}.jsx`]

    page.default.layout = name.startsWith('Public/')
      ? undefined
      : (page) => <AppContextProvider children={page} />

    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <MantineProvider
          theme={{ colorScheme: 'dark' }}
          withGlobalStyles
          withNormalizeCSS
        >
          <QueryClientProvider client={queryClient}>
            {[`local`, `qa`].includes(import.meta.env.VITE_APP_ENV) ? (
              <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom-right"
              />
            ) : null}
            <App {...props} />
          </QueryClientProvider>
        </MantineProvider>
      </StrictMode>,
    )
  },
})
