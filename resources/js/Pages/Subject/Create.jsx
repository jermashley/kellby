import { useStoreSubjectForm } from '@Hooks/Forms/Subject'
import { useStoreSubjectMutation } from '@Hooks/Mutations/Subject'
import { useSubjectTypesQuery } from '@Hooks/Queries/Subject'
import {
  Button,
  Card,
  Center,
  Flex,
  Select,
  Text,
  TextInput,
} from '@mantine/core'

const CreateSubjectPage = () => {
  const storeSubjectForm = useStoreSubjectForm()
  const storeSubject = useStoreSubjectMutation()
  const subjectTypes = useSubjectTypesQuery()

  return (
    <Center mt="4rem">
      <Card shadow="md" padding="lg" radius="md" maw="32rem" w={`100%`}>
        <Card.Section withBorder inheritPadding px={`md`} py={`sm`}>
          <Text size="xl" weight={700}>
            Create Subject
          </Text>
        </Card.Section>

        <Card.Section withBorder inheritPadding px={`md`} py={`sm`}>
          <form
            onSubmit={storeSubjectForm.onSubmit((values) =>
              storeSubject.mutate({ formData: values }),
            )}
          >
            <Flex direction="column" justify="stretch" gap="md">
              <TextInput
                withAsterisk
                label="Name"
                placeholder="American History"
                type="name"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                {...storeSubjectForm.getInputProps(`name`)}
              />

              <Select
                data={subjectTypes?.data ?? [``]}
                label="Type"
                placeholder="Core / Elective"
                className={`capitalize`}
                {...storeSubjectForm.getInputProps(`type`)}
              />

              <Button
                variant="default"
                size="md"
                fullWidth
                mt="md"
                radius="md"
                type="submit"
              >
                Save
              </Button>
            </Flex>
          </form>
        </Card.Section>
      </Card>
    </Center>
  )
}

export default CreateSubjectPage
