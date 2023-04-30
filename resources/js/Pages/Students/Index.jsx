import { useStudentsQuery } from '@Hooks/Queries/Student'
import { Link } from '@inertiajs/react'
import { Button, Table } from '@mantine/core'

const StudentsPage = () => {
  const students = useStudentsQuery()

  const rows = students.data?.map((student) => (
    <tr key={student.uuid}>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.grade.name}</td>
      <td>
        <Link href={`/students/${student.uuid}`}>
          <Button variant={`default`} size={`xs`}>
            View
          </Button>
        </Link>
      </td>
    </tr>
  ))

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Students</p>

      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}

export default StudentsPage
