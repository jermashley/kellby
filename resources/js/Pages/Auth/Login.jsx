import { useLoginForm } from '@Hooks/Forms/Auth'
import { useLoginMutation } from '@Hooks/Mutations/Auth'
import DefaultLayout from '@Layouts/DefaultLayout'
import {
  Button,
  Card,
  Checkbox,
  Flex,
  PasswordInput,
  TextInput,
} from '@mantine/core'

const LoginPage = () => {
  const login = useLoginMutation({
    onSuccess: (data) => console.log(data),
  })

  const loginForm = useLoginForm()

  return (
    <DefaultLayout>
      <>
        <h1>Register here</h1>

        <Card shadow="md" padding="lg" radius="md" maw="32rem">
          <form
            onSubmit={loginForm.onSubmit((values) =>
              login.mutate({ formData: values }),
            )}
          >
            <Flex direction="column" justify="stretch" gap="sm">
              <TextInput
                withAsterisk
                label="Email"
                placeholder="jane.doe@email.com"
                type="email"
                {...loginForm.getInputProps('email')}
              />

              <PasswordInput
                withAsterisk
                label="Password"
                {...loginForm.getInputProps('password')}
              />

              <Checkbox
                label="Remember me"
                {...loginForm.getInputProps('remember')}
              />

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                type="submit"
              >
                Login
              </Button>
            </Flex>
          </form>
        </Card>
      </>
    </DefaultLayout>
  )
}

export default LoginPage
