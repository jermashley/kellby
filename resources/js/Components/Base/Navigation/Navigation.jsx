import { NavigationContext } from '@Contexts/NavigationContextProvider'
import { faSquareKanban } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouteIsCurrent } from '@Hooks/useRouteIsCurrent'
import { Link } from '@inertiajs/react'
import { Navbar, NavLink } from '@mantine/core'
import { useContext } from 'react'

export const Navigation = () => {
  const navigation = useContext(NavigationContext)
  const { currentRouteBeginsWith } = useRouteIsCurrent()

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navigation.isOpen}
      width={{ base: 256 }}
    >
      <Link href="/dashboard">
        <NavLink
          component="div"
          label="Dashboard"
          icon={<FontAwesomeIcon icon={faSquareKanban} fixedWidth />}
          variant="filled"
          active={currentRouteBeginsWith(`/dashboard`)}
          style={{ borderRadius: `0.25rem` }}
        />
      </Link>
    </Navbar>
  )
}
