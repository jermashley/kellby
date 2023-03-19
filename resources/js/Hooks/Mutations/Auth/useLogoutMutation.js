import { router } from '@inertiajs/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const logout = async () => {
  const data = await axios.post(`/auth/logout`)

  return data
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => logout(),

    onSuccess: (data) => {
      queryClient.clear()
      router.visit(`/`)
    },
  })
}
