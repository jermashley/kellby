import { useForm, yupResolver } from '@mantine/form'
import * as Yup from 'yup'

const createTeamSchema = Yup.object().shape({
  name: Yup.string().required(`Team name is required`),
})

export const useCreateTeamForm = ({ config = {} } = {}) =>
  useForm({
    initialValues: {
      name: ``,
    },

    validate: yupResolver(createTeamSchema),
  })
