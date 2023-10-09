import { EventBus } from '@/services'

export const LIFECYCLE_EVENTS = {
  FLOW_CDM: 'flow:component-did-mount',
  FLOW_CDU: 'flow:component-did-update',
  FLOW_RENDER: 'flow:render',
}

export type LyfecycleEventType = keyof typeof LIFECYCLE_EVENTS

export default class BaseComponent {
  private eventBus = new EventBus()

  constructor(protected element: HTMLElement) {
    this.registerEvents()
    this.init()
  }

  public getElement() {
    return this.element
  }

  public dispatch(event: LyfecycleEventType) {
    this.eventBus.emit(event)
  }

  private registerEvents() {
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDM, this.componentDidMount.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_RENDER, this.render.bind(this))
  }

  private createDocumnetElement(tagname: string) {
    return document.createElement(tagname)
  }

  private init() {}

  private render() {}

  private componentDidMount() {}

  private componentDidUpdate() {}
}
