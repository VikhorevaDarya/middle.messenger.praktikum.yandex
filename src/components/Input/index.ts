import BaseComponent, { BaseComponentProps } from '@/components/Base'

import templateString from './index.pug'
import './styles.scss'

export type InputPropsType = {
  id: string
  type: string
  value?: string
  name: string
  placeholder?: string
  autocomplete?: string
  additionalClass?: string
} & BaseComponentProps

export default class Input extends BaseComponent {
  protected template = templateString

  constructor(props: InputPropsType) {
    super(props)
  }
}
