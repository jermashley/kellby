import { ComposeComponents } from '@Components/ComposeComponents'
import { AuthContextProvider } from './AuthContext'

export const AppContextProvider = ({ children }) => {
  const providers = [AuthContextProvider]

  return (
    <ComposeComponents components={[...providers]}>
      {children}
    </ComposeComponents>
  )
}
