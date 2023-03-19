import { ComposeComponents } from '@Components/ComposeComponents'
import { AuthContextProvider } from './AuthContext'
import { NavigationContextProvider } from './NavigationContextProvider'

export const AppContextProvider = ({ children }) => {
  const providers = [AuthContextProvider, NavigationContextProvider]

  return (
    <ComposeComponents components={[...providers]}>
      {children}
    </ComposeComponents>
  )
}
