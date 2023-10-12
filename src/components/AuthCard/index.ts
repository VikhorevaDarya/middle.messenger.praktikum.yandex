import { BaseComponent, Form, Button } from '@/components'
import { InputPropsType } from '@/components/Input'

import templateString from './index.pug'
import './styles.scss'

export type AuthCardPropsType = {
  title: string
  fields: InputPropsType[]
  type: 'signIn' | 'signUp'
}

export default class AuthCard extends BaseComponent {
  protected template = templateString

  constructor(props: AuthCardPropsType) {
    super(props)
  }
}
