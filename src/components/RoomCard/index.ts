import BaseComponent from '../Base'

import templateString from './index.pug'
import './styles.scss'

export default class RoomCard extends BaseComponent {
  protected template = templateString

  constructor(props) {
    super(props)
  }
}
