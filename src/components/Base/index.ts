import { v4 as makeUUID } from 'uuid'
import { EventBus } from '@/services'

export const LIFECYCLE_EVENTS = {
  COMPILE: 'flow:compile',
  FLOW_CDM: 'flow:component-did-mount',
  FLOW_CDU: 'flow:component-did-update',
  FLOW_RENDER: 'flow:render',
}

export type BrowserEventListenersType = { eventType: string; callback: () => void }

export type BaseComponentProps = {
  id?: string
  HTMLRoot: string
  className?: string
  listeners: BrowserEventListenersType[]
  children?: (BaseComponent<BaseComponentProps> | string)[]
}

export type LyfecycleEventType = keyof typeof LIFECYCLE_EVENTS

export const componentAttributeNameId = 'data-component-id'
export const componentPlaceholderAttributeNameId = 'data-id'

export default class BaseComponent<TProps> {
  private eventBus = new EventBus()
  protected template: (locals: Record<string, unknown>) => string = () => ''
  private internalId = ''

  constructor(protected props: BaseComponentProps) {
    this.internalId = `_id_${makeUUID()}`
    this.registerEvents()

    return this
  }

  public getTemplate() {
    return this.template
  }

  public dispatch(event: LyfecycleEventType) {
    this.eventBus.emit(event)
  }

  public getInternalId() {
    return this.internalId
  }

  private registerEvents() {
    this.eventBus.on(LIFECYCLE_EVENTS.COMPILE, this.compile.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDM, this.componentDidMount.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.FLOW_RENDER, this.render.bind(this))
  }

  private getRootElement = () => {
    return document.querySelector(this.props.HTMLRoot)
  }

  private createTemplatePlaceholder() {
    const placeholder = `<div ${componentPlaceholderAttributeNameId}="${this.internalId}"></div>`

    return placeholder
  }

  protected dispatchCompile() {
    this.dispatch(LIFECYCLE_EVENTS.COMPILE as LyfecycleEventType)
  }

  protected dispatchRender() {
    this.dispatch(LIFECYCLE_EVENTS.FLOW_RENDER as LyfecycleEventType)
  }

  private compile() {
    const node = document.createElement('template')

    const props = this.props

    node.innerHTML = this.template({
      ...props,
      children: props.children
        ? Object.values(props.children).map((child) => {
            if (child instanceof BaseComponent) {
              return child.createTemplatePlaceholder()
            }

            return child
          })
        : null,
    })

    return node.content
  }

  // private addBrowserEventListeners(): BrowserEventListenersType[] {
  //   const { listeners } = this.props

  //   if (listeners?.length) {
  //     const element = this.getEventTarget()

  //     return listeners.map((listener) => {
  //       const bindedCallback = listener.callback.bind(this)

  //       element?.addEventListener(listener.eventType, bindedCallback)

  //       return {
  //         eventType: listener.eventType,
  //         callback: bindedCallback,
  //       }
  //     }, [])
  //   }

  //   return []
  // }

  private render() {
    const compiledTemplate = this.compile()
    const HTMLRootElement = this.getRootElement()
    const props = this.props

    if (HTMLRootElement) {
      HTMLRootElement.replaceChildren(compiledTemplate)
    } else {
      const updatedElement = document.querySelector(`[data-id]`)

      if (updatedElement) {
        updatedElement.replaceWith(compiledTemplate)
      }
    }

    if (props.children) {
      Object.values(props.children).forEach((child) => {
        if (child instanceof BaseComponent) {
          child.dispatchRender()
        }
      })
    }
  }

  private componentDidMount() {}

  private componentDidUpdate() {}
}
