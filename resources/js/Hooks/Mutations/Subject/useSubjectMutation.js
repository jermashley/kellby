import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const storeSubject = async (formData) => {
  const data = await axios.post(`/api/subject`, formData)

  return data
}

export const useSubjectMutation = ({ config = {} } = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ formData = {} } = {}) => storeSubject(formData),

    onSuccess: ({ data }) => {
      queryClient.invalidateQueries([`subjects`])
      notifications.show({
        title: `Created ${data.name}`,
        message: `Subject created successfully! 😀`,
        color: `green`,
      })
    },

    ...config,
  })
}
