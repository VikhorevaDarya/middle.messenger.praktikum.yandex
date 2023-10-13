import { v4 as makeUUID } from 'uuid'
import { EventBus } from '@/services'

export const LIFECYCLE_EVENTS = {
  COMPILE: 'compile',
  COMPONENT_DID_MOUNT: 'component-did-mount',
  COMPONENT_DID_UPDATE: 'component-did-update',
  RENDER: 'render',
}

export type BrowserEventListenersType = { eventType: string; callback: () => void }

export type BaseComponentProps = {
  id?: string
  HTMLRoot: string
  className?: string
  listeners: BrowserEventListenersType[]
  children?: BaseComponent<BaseComponentProps> | BaseComponent<BaseComponentProps>[]
}

export type LyfecycleEventType = keyof typeof LIFECYCLE_EVENTS

export const componentAttributeNameId = 'data-component-id'
export const componentPlaceholderAttributeNameId = 'data-id'

export default class BaseComponent<TProps> {
  private eventBus = new EventBus()
  private componentId = ''
  protected template: (locals: Record<string, unknown>) => string = () => ''

  constructor(protected props: BaseComponentProps) {
    this.componentId = `_id_${makeUUID()}`
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
    return this.componentId
  }

  private registerEvents() {
    this.eventBus.on(LIFECYCLE_EVENTS.COMPILE, this.compile.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.COMPONENT_DID_MOUNT, this.componentDidMount.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.COMPONENT_DID_UPDATE, this.componentDidUpdate.bind(this))
    this.eventBus.on(LIFECYCLE_EVENTS.RENDER, this.render.bind(this))
  }

  private getRootElement = () => {
    return document.querySelector(this.props.HTMLRoot)
  }

  protected createTemplatePlaceholder() {
    return `<div ${componentPlaceholderAttributeNameId}="${this.componentId}"></div>`
  }

  protected dispatchCompile() {
    this.dispatch(LIFECYCLE_EVENTS.COMPILE as LyfecycleEventType)
  }

  protected dispatchRender() {
    this.dispatch(LIFECYCLE_EVENTS.RENDER as LyfecycleEventType)
  }

  private compile() {
    const node = document.createElement('template')

    const props = this.props

    let updatedChildren = {}

    if (props.children) {
      for (const [key, value] of Object.entries(props.children)) {
        updatedChildren = {
          ...updatedChildren,
          [key]: Array.isArray(value)
            ? value.map((item) => item.createTemplatePlaceholder())
            : value.createTemplatePlaceholder(),
        }
      }
    }

    const templateProps = {
      ...props,
      children: updatedChildren,
    }

    node.innerHTML = this.template(templateProps)

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
      const updatedElement = document.querySelector(
        `[${componentPlaceholderAttributeNameId}=${this.componentId}]`,
      )

      if (updatedElement) {
        updatedElement.replaceWith(compiledTemplate)
      }
    }

    if (props.children) {
      for (const [key, value] of Object.entries(props.children)) {
        Array.isArray(value) ? value.map((item) => item.dispatchRender()) : value.dispatchRender()
      }
    }
  }

  private componentDidMount() {}

  private componentDidUpdate() {}
}
