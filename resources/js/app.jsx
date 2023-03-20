import { createInertiaApp } from '@inertiajs/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from '@Contexts/AppContextProvider'

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
        <App {...props} />
      </StrictMode>,
    )
  },
})
