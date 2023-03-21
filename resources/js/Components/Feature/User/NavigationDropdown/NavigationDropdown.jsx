import { faCog, faSignOut, faUser } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogoutMutation } from '@Hooks/Mutations/Auth'
import { useUserQuery } from '@Hooks/Queries/user'
import { Link } from '@inertiajs/react'
import { Button, Flex, Menu } from '@mantine/core'

export const NavigationDropdown = () => {
  const user = useUserQuery()
  const logout = useLogoutMutation()

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <Button>
          <Flex direction="row" justify="center" align="center" gap="md">
            <FontAwesomeIcon icon={faUser} fixedWidth />

            {user.data ? (
              <span>
                {user.data.first_name} {user.data.last_name}
              </span>
            ) : null}
          </Flex>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href="/user">
          <Menu.Item icon={<FontAwesomeIcon icon={faCog} fixedWidth />}>
            Account Settings
          </Menu.Item>
        </Link>

        <Menu.Divider />

        <Menu.Item
          icon={<FontAwesomeIcon icon={faSignOut} fixedWidth />}
          onClick={() => logout.mutate()}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
