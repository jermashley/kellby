import { useContext, useState } from 'react'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Code,
  Button,
  Menu,
  Flex,
} from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faCopyright,
  faMemo,
  faSignOut,
  faUser,
} from '@fortawesome/pro-duotone-svg-icons'
import { Link } from '@inertiajs/react'
import { AuthContext } from '@Contexts/AuthContext'
import { useUserQuery } from '@Hooks/Queries/user'
import { useLogoutMutation } from '@Hooks/Mutations/Auth'

const DefaultLayout = ({ children }) => {
  const user = useUserQuery()

  const logout = useLogoutMutation()

  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
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
                opened={opened}
                onClick={() => setOpened((current) => !current)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          </Flex>
        </Header>
      }
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ base: 256 }}
        >
          <Text>Navigation Goes Here</Text>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <Box
            style={{
              display: `flex`,
              flexFlow: `row`,
              justifyContent: `center`,
            }}
          >
            <Text size={`sm`}>
              <FontAwesomeIcon icon={faCopyright} fixedWidth /> Codesign HQ{' '}
              {new Date().getFullYear()}
            </Text>
          </Box>
        </Footer>
      }
    >
      <Code block>{JSON.stringify(user?.data, null, 2)}</Code>
      {children}
    </AppShell>
  )
}

export default DefaultLayout
