import { BaseLayout } from '@/layouts'

import template from './index.pug'
import './styles.scss'

export default class ErrorLayout {
  constructor(props) {
    return new BaseLayout(props, template)
  }
}