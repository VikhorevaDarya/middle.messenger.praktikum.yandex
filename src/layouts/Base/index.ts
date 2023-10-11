import BaseComponent, { BaseComponentProps } from '@/components/Base'

const HTMLRoot = '#root'

export default class BaseLayout extends BaseComponent {
  constructor(template: HTMLElement, props: BaseComponentProps) {
    super(template, { ...props, HTMLRoot })
  }
}
