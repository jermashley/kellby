import { AppContextProvider } from '@Contexts/AppContextProvider'
import { createInertiaApp } from '@inertiajs/react'
import AuthenticatedLayout from '@Layouts/AuthenticatedLayout'
import GuestLayout from '@Layouts/GuestLayout'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob(`./Pages/**/*.jsx`, { eager: true })

    let page = pages[`./Pages/${name}.jsx`]

    page.default.layout = name.startsWith(`Public/`)
      ? (page) => (
          <AppContextProvider>
            <GuestLayout>{page}</GuestLayout>
          </AppContextProvider>
        )
      : (page) => (
          <AppContextProvider>
            <AuthenticatedLayout>{page}</AuthenticatedLayout>
          </AppContextProvider>
        )

    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    )
  },
})
