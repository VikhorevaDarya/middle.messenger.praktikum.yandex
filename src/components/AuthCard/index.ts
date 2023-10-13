import { BaseComponent, Form, Button } from '@/components'

import template from './index.pug'
import './styles.scss'

export type AuthCardPropsType = {
  title: string
  children: {
    form: Form
    outlineButton: Button
  }
}

export default class AuthCard extends BaseComponent<AuthCardPropsType> {
  protected template = template

  constructor(props: AuthCardPropsType) {
    super(props)
  }
}
