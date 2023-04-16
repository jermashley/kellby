import { useCreateTeamForm } from '@Hooks/Forms/Team/useCreateTeamForm'
import { useCreateTeamMutation } from '@Hooks/Mutations/Team/useCreateTeamMutation'
import { useUserQuery } from '@Hooks/Queries/user'
import { Button, Card, Center, Flex, TextInput, Title } from '@mantine/core'

const CreateTeamPage = () => {
  const user = useUserQuery()
  const createTeamForm = useCreateTeamForm()
  const createTeam = useCreateTeamMutation()

  return (
    <Center mt="4rem">
      <Card shadow="md" padding="lg" radius="md" maw="32rem" w={`100%`}>
        <Title order={1} mb={`2rem`}>
          Create a team
        </Title>

        <form
          onSubmit={createTeamForm.onSubmit((values) =>
            createTeam.mutate({ formData: values }),
          )}
        >
          <Flex direction="column" justify="stretch" gap="md">
            <TextInput
              withAsterisk
              label="Name"
              placeholder={`${user.data?.first_name}'s Class`}
              {...createTeamForm.getInputProps(`name`)}
            />

            <Button
              variant="default"
              size="md"
              fullWidth
              mt="md"
              radius="md"
              type="submit"
            >
              Create
            </Button>
          </Flex>
        </form>
      </Card>
    </Center>
  )
}

export default CreateTeamPage
