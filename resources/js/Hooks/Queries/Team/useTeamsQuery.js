import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getTeams = async () => {
  const data = await axios.get(`/api/team`)

  return data
}

export const useTeamsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: [`teams`],
    queryFn: () => getTeams(),

    ...config,
  })
