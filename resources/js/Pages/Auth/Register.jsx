import { useRegisterUserForm } from '@Hooks/Forms/Auth'
import { useRegisterUserMutation } from '@Hooks/Mutations/Auth'

const RegisterPage = () => {
  const registerUser = useRegisterUserMutation({
    onSuccess: (data) => console.log(data),
  })

  const registerUserForm = useRegisterUserForm({
    config: {
      onSubmit: (values) => {
        registerUser.mutate({ formData: values })
      },
    },
  })

  return (
    <>
      <h1>Register here</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          registerUserForm.handleSubmit()
        }}
        className="flex flex-col items-start justify-start space-y-2 p-4"
      >
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={registerUserForm.handleChange}
          value={registerUserForm.values.first_name}
          className="border"
          placeholder="Jane"
        />

        <input
          type="text"
          name="last_name"
          id="last_name"
          onChange={registerUserForm.handleChange}
          value={registerUserForm.values.last_name}
          className="border"
          placeholder="Doe"
        />

        <input
          type="email"
          name="email"
          id="email"
          onChange={registerUserForm.handleChange}
          value={registerUserForm.values.email}
          className="border"
          placeholder="jane.doe@email.com"
        />

        <input
          type="password"
          name="password"
          id="password"
          onChange={registerUserForm.handleChange}
          value={registerUserForm.values.password}
          className="border"
          placeholder="•••••••••"
        />

        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          onChange={registerUserForm.handleChange}
          value={registerUserForm.values.password_confirmation}
          className="border"
          placeholder="•••••••••"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default RegisterPage
