import { BaseComponent } from '@/components'

import templateString from './index.pug'
import './styles.scss'

export default class Message extends BaseComponent {
  protected template = templateString

  constructor(props) {
    super(props)
  }
}
