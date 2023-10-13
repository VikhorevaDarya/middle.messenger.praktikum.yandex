import { BaseLayout } from '@/layouts'

import template from './index.pug'
import './styles.scss'

export default class SettingsLayout {
  constructor(props) {
    return new BaseLayout(props, template)
  }
}
