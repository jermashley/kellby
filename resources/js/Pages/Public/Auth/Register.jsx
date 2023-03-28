import { useRegisterUserForm } from '@Hooks/Forms/Auth'
import { useRegisterUserMutation } from '@Hooks/Mutations/Auth'
import GuestLayout from '@Layouts/GuestLayout'
import {
  Button,
  Card,
  Center,
  Flex,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'

const RegisterPage = () => {
  const registerUser = useRegisterUserMutation()

  const registerUserForm = useRegisterUserForm()

  return (
    <Center mt="4rem">
      <Card shadow="md" padding="lg" radius="md" maw="32rem" w={`100%`}>
        <Title order={1} mb={`2rem`}>
          Create an account
        </Title>

        <form
          onSubmit={registerUserForm.onSubmit((values) =>
            registerUser.mutate({ formData: values }),
          )}
        >
          <Flex direction="column" justify="stretch" gap="md">
            <TextInput
              withAsterisk
              label="First name"
              placeholder="Jane"
              type="text"
              {...registerUserForm.getInputProps('first_name')}
            />

            <TextInput
              withAsterisk
              label="Last name"
              placeholder="Doe"
              type="text"
              {...registerUserForm.getInputProps('last_name')}
            />

            <TextInput
              withAsterisk
              label="Email"
              placeholder="jane.doe@email.com"
              type="email"
              {...registerUserForm.getInputProps('email')}
            />

            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="••••••••••••"
              {...registerUserForm.getInputProps('password')}
            />

            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="••••••••••••"
              {...registerUserForm.getInputProps('password_confirmation')}
            />

            <Button
              variant="default"
              size="md"
              fullWidth
              mt="md"
              radius="md"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Card>
    </Center>
  )
}

export default RegisterPage
