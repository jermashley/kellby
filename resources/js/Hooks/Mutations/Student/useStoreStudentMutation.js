import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const storeStudent = async (formData) => {
  const data = await axios.post(`/api/student`, formData)

  return data
}

export const useStoreStudentMutation = ({ config = {} } = {}) =>
  useMutation({
    queryMethod: ({ formData: {} } = {}) => storeStudent(formData),
  })
