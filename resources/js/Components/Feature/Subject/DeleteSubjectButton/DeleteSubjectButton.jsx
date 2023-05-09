import { faTrashAlt } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDestroySubjectMutation } from '@Hooks/Mutations/Subject'
import { Button, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const DeleteSubjectButton = ({ subject }) => {
  const destroySubject = useDestroySubjectMutation()
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
        <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
      </Button>

      <Modal opened={opened} onClose={close} title={`Delete Subject?`} centered>
        <Text>Are you sure you want to delete this subject?</Text>

        <Group position={`right`} className={`mt-4`}>
          <Button variant="subtle" color="gray" onClick={() => close()}>
            Cancel
          </Button>

          <Button
            variant="light"
            color="red"
            onClick={() => destroySubject.mutate({ uuid: subject.uuid })}
          >
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  )
}
