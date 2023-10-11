import BaseComponent, { BaseComponentProps } from '@/components/Base'

import template from './index'
import './styles.scss'

type InputProps = {} & BaseComponentProps

export default class Input extends BaseComponent {
  constructor(props: InputProps) {
    super(template, props)
  }
}
