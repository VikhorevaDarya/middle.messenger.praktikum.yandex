import { MainLayout } from '@/layouts'
import { Form, Input, Button } from '@/components'

import './styles.scss'

const fields = [
  {
    type: 'text',
    name: 'first_name',
    placeholder: 'Name',
    autocomplete: 'name',
  },
  {
    type: 'text',
    name: 'second_name',
    placeholder: 'Surname',
    autocomplete: 'second-name',
  },
  {
    type: 'text',
    name: 'display_name',
    placeholder: 'Display name',
    autocomplete: 'username',
  },
  {
    type: 'text',
    name: 'login',
    placeholder: 'Login',
    autocomplete: 'login',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    autocomplete: 'email',
  },
  {
    type: 'password',
    name: 'oldPassword',
    placeholder: 'Old password',
    autocomplete: 'current-password',
  },
  {
    type: 'password',
    name: 'newPassword',
    placeholder: 'New password',
    autocomplete: 'new-password',
  },
  {
    type: 'password',
    name: 'newPasswordAgain',
    placeholder: 'New password again',
    autocomplete: 'new-password',
  },
]

const inputs = fields.map((field) => new Input(field))

export default class SettingsPage {
  constructor() {
    return new MainLayout({
      children: {
        block: new Form({
          children: {
            fields: inputs,
            button: new Button({
              type: 'submit',
              title: 'Update profile',
            }),
          },
        }),
      },
    })
  }
}
