import { DeleteSubjectButton } from '@Components/Feature/Subject/DeleteSubjectButton'
import { faPlus } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSubjectsQuery } from '@Hooks/Queries/Subject'
import { Link } from '@inertiajs/react'
import { Button, Card, Group, Table, Text } from '@mantine/core'

const SubjectIndexPage = () => {
  const subjects = useSubjectsQuery()

  const rows = subjects.data?.map((subject) => (
    <tr key={subject.uuid} className={`group`}>
      <td>{subject.name}</td>
      <td className={`capitalize`}>{subject.type}</td>
      <td>
        {subject.team_id ? <DeleteSubjectButton subject={subject} /> : null}
      </td>
    </tr>
  ))

  return (
    <div className="min-h-screen w-full">
      <Card shadow="sm" className={`mt-4`} withBorder>
        <Card.Section withBorder inheritPadding px={`lg`} py={`sm`}>
          <Group position={`apart`}>
            <Text size="xl" weight={700}>
              Subjects
            </Text>

            <Link href={`/subject/create`}>
              <Button component="div" variant={`default`} size={`xs`}>
                <FontAwesomeIcon icon={faPlus} fixedWidth />
              </Button>
            </Link>
          </Group>
        </Card.Section>

        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </div>
  )
}

export default SubjectIndexPage
