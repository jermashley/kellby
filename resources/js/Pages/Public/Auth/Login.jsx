import { useLoginForm } from '@Hooks/Forms/Auth'
import { useLoginMutation } from '@Hooks/Mutations/Auth'
import GuestLayout from '@Layouts/GuestLayout'
import {
  Button,
  Card,
  Center,
  Checkbox,
  Flex,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'

const LoginPage = () => {
  const login = useLoginMutation()

  const loginForm = useLoginForm()

  return (
    <Center mt="4rem">
      <Card shadow="md" padding="lg" radius="md" maw="32rem" w={`100%`}>
        <Title order={1} mb={`2rem`}>
          Log in
        </Title>

        <form
          onSubmit={loginForm.onSubmit((values) =>
            login.mutate({ formData: values }),
          )}
        >
          <Flex direction="column" justify="stretch" gap="md">
            <TextInput
              withAsterisk
              label="Email"
              placeholder="jane.doe@email.com"
              type="email"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              {...loginForm.getInputProps(`email`)}
            />

            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="••••••••••••"
              {...loginForm.getInputProps(`password`)}
            />

            <Flex direction={`row`} justify={`flex-end`} align={`center`}>
              <Checkbox
                label="Remember me"
                {...loginForm.getInputProps(`remember`)}
              />
            </Flex>

            <Button
              variant="default"
              size="md"
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
    </Center>
  )
}

export default LoginPage
