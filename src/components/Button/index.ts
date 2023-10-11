import BaseComponent, { BaseComponentProps } from '@/components/Base'

import template from './index'
import './styles.scss'

type ButtonProps = {
  outline?: boolean
  type?: 'submit' | 'button'
  id?: string
  value?: string
  disabled?: boolean
  additionalClass?: string
} & BaseComponentProps

export default class Button extends BaseComponent {
  constructor(props: ButtonProps) {
    super(template, props)
  }
}
