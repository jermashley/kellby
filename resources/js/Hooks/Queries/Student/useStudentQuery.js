import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getStudent = async (id) => {
  const data = await axios.get(`/api/student/${id}`)

  return data
}

export const useStudentQuery = ({ id = undefined, config = {} } = {}) =>
  useQuery({
    queryKey: [`student`, id],
    queryFn: () => getStudent(id),

    ...config,
  })
