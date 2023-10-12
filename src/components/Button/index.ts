import BaseComponent, { BaseComponentProps } from '@/components/Base'

import templateString from './index.pug'
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
  protected template = templateString

  constructor(props: ButtonProps) {
    super(props)
  }
}
