import { ComposeComponents } from '@Components/ComposeComponents'

export const AppContextProvider = ({ children }) => {
  const providers = []

  return (
    <ComposeComponents components={[...providers]}>
      {children}
    </ComposeComponents>
  )
}
