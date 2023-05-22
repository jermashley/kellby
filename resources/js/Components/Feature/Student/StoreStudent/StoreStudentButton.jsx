import { useStoreStudentMutation } from '@Hooks/Mutations/Student'
import { faPlus } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const StoreStudentButton = () => {
  const storeStudent = useStoreStudentMutation()
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button
        className={`opacity-0 group-hover:opacity-100`}
        size={`xs`}
        variant={`default`}
        color="red"
        onClick={() => open()}
      >
        <FontAwesomeIcon icon={faPlus} fixedWidth />
      </Button>

      <Modal opened={opened} onClose={close} title={`Delete Subject?`} centered>
        <Text>Create student?</Text>

        <Group position={`right`} className={`mt-4`}>
          <Button variant="subtle" color="gray" onClick={() => close()}>
            Cancel
          </Button>

          <Button
            variant="light"
            color="red"
            onClick={() => destroySubject.mutate({ uuid: subject.uuid })}
          >
            Create
          </Button>
        </Group>
      </Modal>
    </>
  )
}
