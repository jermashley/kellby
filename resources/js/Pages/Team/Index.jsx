import { useTeamsQuery } from '@Hooks/Queries/Team'
import { Button, Card, Flex, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Fragment } from 'react'

const TeamIndexPage = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const teams = useTeamsQuery()

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Teams</p>

      {teams.data?.map((team) => (
        <Fragment key={team.uuid}>
          <Card shadow="sm" className="mt-4">
            <Flex
              direction={{ base: `column`, sm: `row` }}
              justify={{ base: `flex-start`, sm: `space-between` }}
              align={{ base: `stretch`, sm: `center` }}
              gap={{ base: `md`, sm: `lg` }}
            >
              <Text weight={500}>{team.name}</Text>

              <Button variant={`default`} onClick={() => open()}>
                Manage
              </Button>
            </Flex>
          </Card>

          <Modal
            opened={opened}
            onClose={close}
            title={`Manage ${team.name}`}
          ></Modal>
        </Fragment>
      ))}
    </div>
  )
}

export default TeamIndexPage
