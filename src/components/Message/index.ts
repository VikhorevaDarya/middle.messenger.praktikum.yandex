import { BaseComponent } from '@/components'

import template from './index.pug'
import './styles.scss'

export type MessagePropsType = {
  text: string
  time: string
}

export default class Message extends BaseComponent<MessagePropsType> {
  protected template = template

  constructor(props) {
    super(props)
  }
}
