import { BaseComponent } from '@/components'

import templateString from './index.pug'
import './styles.scss'

const HTMLRoot = '#root'

export default class MainLayout extends BaseComponent {
  protected template = templateString

  constructor(props) {
    super({ HTMLRoot, ...props })

    this.dispatchRender()
  }
}
