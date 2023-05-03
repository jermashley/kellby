import { faPlus } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSubjectsQuery } from '@Hooks/Queries/Subject'
import { Button, Card, Group, Table } from '@mantine/core'

const SubjectIndexPage = () => {
  const subjects = useSubjectsQuery()

  const rows = subjects.data?.map((subject) => (
    <tr key={subject.uuid}>
      <td>{subject.name}</td>
      <td className={`capitalize`}>{subject.type}</td>
    </tr>
  ))

  return (
    <div className="min-h-screen w-full">
      <Card shadow="sm" className={`mt-4`} withBorder>
        <Card.Section withBorder inheritPadding px={`md`} py={`sm`}>
          <Group position={`apart`}>
            <p className={`text-zinc-700`}>Subjects</p>

            <Button variant={`default`} size={`xs`}>
              <FontAwesomeIcon icon={faPlus} fixedWidth />
            </Button>
          </Group>
        </Card.Section>

        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </div>
  )
}

export default SubjectIndexPage
