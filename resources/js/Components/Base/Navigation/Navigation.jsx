import { NavigationContext } from '@Contexts/NavigationContextProvider'
import {
  faBooks,
  faPlus,
  faScreenUsers,
  faSignOut,
  faSquareKanban,
  faUser,
  faUsersLine,
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/User'
import { useRouteIsCurrent } from '@Hooks/useRouteIsCurrent'
import { Link } from '@inertiajs/react'
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Group,
  Menu,
  Navbar,
  NavLink,
  Text,
  UnstyledButton,
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
      <Navbar.Section>
        <Link href={`/log/add`}>
          <Button
            component="div"
            variant="filled"
            color="gray"
            leftIcon={<FontAwesomeIcon icon={faPlus} fixedWidth />}
            fullWidth
          >
            New Log
          </Button>
        </Link>
      </Navbar.Section>

      <Divider my="md" />

      <Navbar.Section grow>
        <Link href="/dashboard">
          <NavLink
            component="div"
            label="Dashboard"
            icon={<FontAwesomeIcon icon={faSquareKanban} fixedWidth />}
            variant="filled"
            color="gray"
            active={currentRouteBeginsWith(`/dashboard`)}
            style={{ borderRadius: `0.25rem` }}
          />
        </Link>

        <Link href="/students">
          <NavLink
            component="div"
            label="Students"
            icon={<FontAwesomeIcon icon={faScreenUsers} fixedWidth />}
            variant="filled"
            color="gray"
            active={currentRouteBeginsWith(`/students`)}
            style={{ borderRadius: `0.25rem` }}
          />
        </Link>

        <Link href="/subjects">
          <NavLink
            component="div"
            label="Subjects"
            icon={<FontAwesomeIcon icon={faBooks} fixedWidth />}
            variant="filled"
            color="gray"
            active={currentRouteBeginsWith(`/subjects`)}
            style={{ borderRadius: `0.25rem` }}
          />
        </Link>
      </Navbar.Section>

      <Navbar.Section>
        <Menu width="target">
          <Menu.Target>
            <UnstyledButton px="md" py="sm" w="100%">
              <Group position="left" spacing="sm">
                {user.data?.avatar ? (
                  <Avatar src={user.data?.avatar} radius="md" size="md" />
                ) : null}

                <Flex
                  direction="column"
                  justify="flex-start"
                  align="flex-start"
                >
                  <Text size="sm" weight="bold">
                    {user.data?.first_name} {user.data?.last_name}
                  </Text>

                  <Text size="xs" inline>
                    {user.data?.email}
                  </Text>
                </Flex>
              </Group>
            </UnstyledButton>
          </Menu.Target>

          <Menu.Dropdown>
            <Link href={`/user/profile`}>
              <Menu.Item icon={<FontAwesomeIcon icon={faUser} fixedWidth />}>
                Profile
              </Menu.Item>
            </Link>

            <Link href="/team">
              <Menu.Item
                icon={<FontAwesomeIcon icon={faUsersLine} fixedWidth />}
              >
                Team
              </Menu.Item>
            </Link>

            <Divider my="xs" />

            <Menu.Item
              icon={<FontAwesomeIcon icon={faSignOut} fixedWidth />}
              onClick={() => logout.mutate()}
            >
              Log out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Navbar.Section>
    </Navbar>
  )
}
