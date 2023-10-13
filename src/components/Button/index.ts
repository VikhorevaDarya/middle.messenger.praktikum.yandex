import BaseComponent, { BaseComponentProps } from '@/components/Base'

import template from './index.pug'
import './styles.scss'

type ButtonProps = {
  outline?: boolean
  type?: 'submit' | 'button'
  id?: string
  value?: string
  disabled?: boolean
  icon?: string
} & BaseComponentProps

export default class Button extends BaseComponent<ButtonProps> {
  protected template = template

  constructor(props: ButtonProps) {
    super(props)
  }
}
