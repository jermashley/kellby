import { router } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const createTeam = async (formData = {}) => {
  const data = await axios.post(`/team`, {
    ...formData,
  })

  return data
}

export const useCreateTeamMutation = ({ config = {} } = {}) =>
  useMutation({
    mutationFn: ({ formData = {} }) => createTeam(formData),
    onSuccess: () => {
      notifications.show({
        message: `Team created!`,
        color: `green`,
      })

      router.visit(`/dashboard`)
    },

    ...config,
  })
