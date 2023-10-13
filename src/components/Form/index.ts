import { BaseComponent, Input, Button } from '@/components'

import template from './index.pug'
import './styles.scss'

export type FormProps = {
  children: {
    fields: Input[]
    button: Button
  }
  class?: string
}

export default class Form extends BaseComponent<FormProps> {
  protected template = template

  constructor(props: FormProps) {
    super(props)
  }
}
