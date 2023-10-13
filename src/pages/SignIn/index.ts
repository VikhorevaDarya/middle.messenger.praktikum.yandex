import { AuthLayout } from '@/layouts'
import { AuthCard, Form, Input, Button } from '@/components'

const fields = [
  {
    label: 'Login',
    type: 'text',
    name: 'login',
    autocomplete: 'login',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    autocomplete: 'current-password',
  },
]

const inputs = fields.map((field) => new Input({ ...field, placeholder: field.label }))

export default class SignIn {
  constructor() {
    return new AuthLayout({
      children: {
        authCard: new AuthCard({
          type: 'signIn',
          title: 'Log In',
          children: {
            form: new Form({
              children: {
                fields: inputs,
                button: new Button({
                  title: 'Create account',
                  type: 'submit',
                  class: 'form__submit',
                }),
              },
            }),
            outlineButton: new Button({
              outline: true,
              title: 'Already have account?',
            }),
          },
        }),
      },
    })
  }
}
