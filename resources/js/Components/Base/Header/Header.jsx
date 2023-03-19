import { NavigationContext } from '@Contexts/NavigationContextProvider'
import {
  faCog,
  faMemo,
  faSignOut,
  faUser,
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import { Link } from '@inertiajs/react'
import {
  Burger,
  Button,
  Flex,
  Header as AppHeader,
  MediaQuery,
  Menu,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useContext } from 'react'

export const Header = () => {
  const user = useUserQuery()
  const navigation = useContext(NavigationContext)
  const logout = useLogoutMutation()
  const theme = useMantineTheme()

  return (
    <AppHeader
      height={{ base: 50, md: 70 }}
      p="md"
      style={{
        display: `flex`,
        flexFlow: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <Link href={`/`}>
        <Text size={`lg`} weight={`bold`}>
          <FontAwesomeIcon icon={faMemo} fixedWidth /> Kellby
        </Text>
      </Link>

      <Flex direction={`row`} justify={`flex-end`} align={`center`} gap={4}>
        {user.data ? (
          <Menu>
            <Menu.Target>
              <Button>
                <FontAwesomeIcon icon={faUser} fixedWidth />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<FontAwesomeIcon icon={faCog} fixedWidth />}>
                Account Settings
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item
                icon={<FontAwesomeIcon icon={faSignOut} fixedWidth />}
                onClick={() => logout.mutate()}
              >
                Sign out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <>
            <Link href={`/register`}>
              <Text style={{ textDecoration: `underline` }}>Register</Text>
            </Link>
            /
            <Link href={`/login`}>
              <Text style={{ textDecoration: `underline` }}>Login</Text>
            </Link>
          </>
        )}

        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={navigation.isOpen}
            onClick={() => navigation.setIsOpen((current) => !current)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
      </Flex>
    </AppHeader>
  )
}
