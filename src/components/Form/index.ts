import BaseComponent, { BaseComponentProps } from '@/components/Base'
import { InputPropsType } from '@/components/Input'

import templateString from './index.pug'
import './styles.scss'

export type FormProps = {
  children: {
    fields: InputPropsType[]
  }
  submitClassName?: string
  formClassName?: string
  submitTitle: string
  inputProps: {}
} & BaseComponentProps

export default class Form extends BaseComponent {
  protected template = templateString

  constructor(props: FormProps) {
    super(props)
  }
}
