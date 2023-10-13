import { BaseComponent } from '@/components'

import template from './index.pug'
import './styles.scss'

export type RommCardPropsType = {
  sender: {
    name: string
    avatarSrc: string
    lastMessage: {
      text: string
      time: string
    }
    unread: number
  }
}

export default class RoomCard extends BaseComponent<RommCardPropsType> {
  protected template = template

  constructor(props) {
    super(props)
  }
}
