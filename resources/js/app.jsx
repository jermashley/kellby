import { createInertiaApp } from '@inertiajs/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          {[`local`, `qa`].includes(import.meta.env.VITE_APP_ENV) ? (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          ) : null}
          <App {...props} />
        </QueryClientProvider>
      </StrictMode>,
    )
  },
})
