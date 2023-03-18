import { useRegisterUserForm } from '@Hooks/Forms/Auth'
import { useRegisterUserMutation } from '@Hooks/Mutations/Auth'
import DefaultLayout from '@Layouts/DefaultLayout'
import { Button, Card, Flex, PasswordInput, TextInput } from '@mantine/core'

const RegisterPage = () => {
  const registerUser = useRegisterUserMutation({
    onSuccess: (data) => console.log(data),
  })

  const registerUserForm = useRegisterUserForm()

  return (
    <DefaultLayout>
      <>
        <h1>Register here</h1>

        <Card shadow="md" padding="lg" radius="md" maw="32rem">
          <form
            onSubmit={registerUserForm.onSubmit((values) =>
              registerUser.mutate({ formData: values }),
            )}
          >
            <Flex direction="column" justify="stretch" gap="sm">
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
                {...registerUserForm.getInputProps('password')}
              />

              <PasswordInput
                withAsterisk
                label="Password"
                {...registerUserForm.getInputProps('password_confirmation')}
              />

              <Button
                variant="light"
                color="blue"
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
      </>
    </DefaultLayout>
  )
}

export default RegisterPage
