import { AuthLayout } from '@/layouts'
import { AuthCard, Form, Button, Input } from '@/components'

const fields = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    autocomplete: 'email',
  },
  {
    label: 'Login',
    type: 'text',
    name: 'login',
    autocomplete: 'login',
  },
  {
    label: 'Name',
    type: 'text',
    name: 'first_name',
    autocomplete: 'name',
  },
  {
    label: 'Surname',
    type: 'text',
    name: 'second_name',
    autocomplete: 'second-name',
  },
  {
    label: 'Phone',
    type: 'phone',
    name: 'phone',
    autocomplete: 'tel',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    autocomplete: 'new-password',
  },
  {
    label: 'Password again',
    type: 'password',
    name: 'password_again',
    autocomplete: 'new-password',
  },
]

const inputs = fields.map((field) => new Input(field))

export default class SignUp {
  constructor() {
    return new AuthLayout({
      children: {
        authCard: new AuthCard({
          type: 'signUp',
          title: 'Sign Up',
          children: {
            form: new Form({
              children: {
                inputs,
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
