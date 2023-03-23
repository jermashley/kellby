import { NavigationDropdown } from '@Components/Feature/User'
import { NavigationContext } from '@Contexts/NavigationContextProvider'
import { faMemo, faSignIn } from '@fortawesome/pro-duotone-svg-icons'
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
    <AppHeader height={{ base: 50, md: 70 }} p="md">
      <Flex direction="row" justify="space-between" align="center">
        <Link href={`/`}>
          <Title order={2} weight="normal">
            <FontAwesomeIcon icon={faMemo} fixedWidth /> Kellby
          </Title>
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
