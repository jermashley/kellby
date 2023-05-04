import { capitalize } from '@Lib/capitalize'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getSubjectTypes = async () => {
  return await axios.get(`/api/subject/types`)
}

export const useSubjectTypesQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`subject-types`],
    queryFn: getSubjectTypes,

    select: ({ data }) => {
      return data.reduce((array, current, index) => {
        array[index] = {
          value: current[`value`],
          label: capitalize(current[`value`]),
        }

        return array
      }, [])
    },

    ...config,
  })
