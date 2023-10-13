import { Button, BaseComponent } from '@/components'

import template from './index.pug'
import './styles.scss'

export type ErrorPropsType = {
  status: string
  text: string
  children: {
    button: {}
  }
}

const buttonProps = { title: 'Назад к чатам', outline: true }

export default class Error extends BaseComponent<ErrorPropsType> {
  protected template = template

  constructor(props) {
    super({
      ...props,
      children: {
        button: new Button(buttonProps),
      },
    })
  }
}
