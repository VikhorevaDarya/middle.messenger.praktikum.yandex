import pug from 'pug'

import { EventBus } from '@/services'

export const LIFECYCLE_EVENTS = {
  FLOW_CDM: 'flow:component-did-mount',
  FLOW_CDU: 'flow:component-did-update',
  FLOW_RENDER: 'flow:render',
}

export type BaseComponentProps = {
  id?: string
  HTMLRoot: HTMLElement
}

export type LyfecycleEventType = keyof typeof LIFECYCLE_EVENTS

export default class BaseComponent {
  private eventBus = new EventBus()

  constructor(
    protected template: HTMLElement,
    protected props: BaseComponentProps,
  ) {
    this.registerEvents()
  }

  public getTemplate() {
    return this.template
  }

  public dispatch(event: LyfecycleEventType) {
    this.eventBus.emit(event)
  }

  private registerEvents() {
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDM, this.componentDidMount.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_RENDER, this.render.bind(this))
  }

  private getCompiledTemplate() {
    return pug.compile(this.template)
  }

  private render() {
    const compiledTemplate = this.getCompiledTemplate()

    this.props.HTMLRoot?.appendChild(compiledTemplate)
  }

  private componentDidMount() {}

  private componentDidUpdate() {}
}
