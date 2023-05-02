import { useStudentQuery } from '@Hooks/Queries/Student'

const ShowStudentPage = ({ uuid }) => {
  const student = useStudentQuery({ uuid })

  return (
    <div className="min-h-screen w-full">
      <p className="text-lg text-zinc-700">Student</p>
    </div>
  )
}

export default ShowStudentPage
