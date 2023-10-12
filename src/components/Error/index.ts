import { Button, BaseComponent } from '@/components'

import templateString from './index.pug'
import './styles.scss'

const buttonProps = { title: 'Назад к чатам', outline: true }

export default class Error extends BaseComponent {
  protected template = templateString

  constructor(props) {
    super({
      ...props,
      children: {
        button: new Button(buttonProps),
      },
    })
  }
}
