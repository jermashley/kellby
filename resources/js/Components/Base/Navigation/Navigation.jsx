import { NavigationContext } from '@Contexts/NavigationContextProvider'
import { Navbar, Text } from '@mantine/core'
import { useContext } from 'react'

export const Navigation = () => {
  const navigation = useContext(NavigationContext)
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navigation.isOpen}
      width={{ base: 256 }}
    >
      <Text>Navigation Goes Here</Text>
    </Navbar>
  )
}
