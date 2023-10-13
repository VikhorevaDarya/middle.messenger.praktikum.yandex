import { BaseComponent } from '@/components'
import { BaseComponentProps } from '../../components/Base'

const HTMLRoot = '#root'

export default class BaseLayout extends BaseComponent {
  constructor(props, template) {
    super({ HTMLRoot, ...props })

    this.template = template
    this.dispatchRender()
  }
}
