import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const registerUser = async (formData = {}) => {
  const data = await axios.post(`/auth/register`, {
    ...formData,
  })

  return data
}

export const useRegisterUserMutation = ({ config = {} } = {}) =>
  useMutation({
    mutationFn: ({ formData = {} }) => registerUser(formData),

    ...config,
  })
