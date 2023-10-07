type CallbackType = (...args: unknown[]) => void

type ListenerType<TEventType extends string> = {
  [key in TEventType]?: CallbackType[]
}

export default class EventBut<TEvent extends string> {
  private listeners: ListenerType<TEvent> = {}

  private checkEvent(event: TEvent) {
    if (!this.listeners[event]) {
      throw new Error(`${event} события не существует`)
    }
  }

  public on(event: TEvent, callback: CallbackType) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event]?.push(callback)
  }

  public off(event: TEvent, callback: CallbackType) {
    this.checkEvent(event)

    this.listeners[event] = this.listeners[event]?.filter((listener) => listener !== callback)
  }

  public emit(event: TEvent, ...args: unknown[]) {
    this.checkEvent(event)

    this.listeners[event]?.forEach((callback) => {
      callback(...args)
    })
  }
}
