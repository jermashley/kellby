import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getSubjects = async () => {
  const data = await axios.get(`/api/subject`)

  return data
}

export const useSubjectsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`subjects`],
    queryFn: getSubjects,

    select: ({ data }) => data,

    ...config,
  })
