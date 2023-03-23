import { NavigationContext } from '@Contexts/NavigationContextProvider'
import {
  faAngleUp,
  faMemo,
  faSignOut,
  faSquareKanban,
  faUser,
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import { useRouteIsCurrent } from '@Hooks/useRouteIsCurrent'
import { Link } from '@inertiajs/react'
import {
  Accordion,
  Avatar,
  Divider,
  Flex,
  Navbar,
  NavLink,
  Text,
  Title,
} from '@mantine/core'
import { useContext } from 'react'

export const Navigation = () => {
  const navigation = useContext(NavigationContext)

  const user = useUserQuery()
  const logout = useLogoutMutation()

  const { currentRouteBeginsWith } = useRouteIsCurrent()

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navigation.isOpen}
      width={{ sm: 320 }}
    >
      <Navbar.Section grow>
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
      </Navbar.Section>

      <Navbar.Section>
        <Accordion variant="separated">
          <Accordion.Item value="user-panel">
            <Accordion.Control
              chevron={<FontAwesomeIcon icon={faAngleUp} fixedWidth />}
            >
              <Flex
                direction="row"
                justify="flex-start"
                align="center"
                gap="md"
              >
                {user.data?.avatar ? (
                  <Avatar src={user.data?.avatar} radius={100} />
                ) : null}

                <Flex
                  direction="column"
                  justify="flex-start"
                  align="flex-start"
                >
                  <Text size="sm">
                    {user.data?.first_name} {user.data?.last_name}
                  </Text>

                  <Text size="xs" inline>
                    {user.data?.email}
                  </Text>
                </Flex>
              </Flex>
            </Accordion.Control>

            <Accordion.Panel>
              <Link href={`/profile`}>
                <NavLink
                  label="Profile"
                  icon={<FontAwesomeIcon icon={faUser} fixedWidth />}
                  component="div"
                  variant="subtle"
                  style={{ borderRadius: `0.25rem` }}
                />
              </Link>

              <Divider my="xs" />

              <NavLink
                label="Log out"
                icon={<FontAwesomeIcon icon={faSignOut} fixedWidth />}
                variant="subtle"
                style={{ borderRadius: `0.25rem` }}
                onClick={() => logout.mutate()}
              />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>
    </Navbar>
  )
}
