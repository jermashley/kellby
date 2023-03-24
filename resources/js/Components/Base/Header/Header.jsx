import { NavigationDropdown } from '@Components/Feature/User'
import { NavigationContext } from '@Contexts/NavigationContextProvider'
import { faMemo, faPlus, faSignIn } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUserQuery } from '@Hooks/Queries/user'
import { Link } from '@inertiajs/react'
import {
  Burger,
  Button,
  Flex,
  Header as AppHeader,
  MediaQuery,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useContext } from 'react'

export const Header = () => {
  const user = useUserQuery()
  const navigation = useContext(NavigationContext)
  const theme = useMantineTheme()

  return (
    <AppHeader height={60} p="md">
      <Flex direction="row" justify="space-between" align="center" h="100%">
        <Link href={`/`}>
          <Text size="xl" weight="normal">
            <FontAwesomeIcon icon={faMemo} fixedWidth /> Kellby
          </Text>
        </Link>

        <Flex direction={`row`} justify={`flex-end`} align={`center`} gap={4}>
          {user.isError && !user.data && !user.isLoading && !user.isFetching ? (
            <Link href={`/login`}>
              <Button
                component="div"
                variant="default"
                size="xs"
                leftIcon={<FontAwesomeIcon icon={faSignIn} fixedWidth />}
              >
                Log in
              </Button>
            </Link>
          ) : null}

          {user.data ? (
            <Link href={`/log/add`}>
              <Button
                component="div"
                variant="default"
                size="xs"
                leftIcon={<FontAwesomeIcon icon={faPlus} fixedWidth />}
              >
                New Log
              </Button>
            </Link>
          ) : null}

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
      </Flex>
    </AppHeader>
  )
}
