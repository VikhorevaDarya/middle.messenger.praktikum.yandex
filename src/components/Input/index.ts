import BaseComponent, { BaseComponentProps } from '@/components/Base'

import template from './index.pug'
import './styles.scss'

export type InputPropsType = {
  id: string
  type: string
  value?: string
  name: string
  placeholder?: string
  autocomplete?: string
  class?: string
} & BaseComponentProps

export default class Input extends BaseComponent<InputPropsType> {
  protected template = template

  constructor(props: InputPropsType) {
    super(props)
  }
}
