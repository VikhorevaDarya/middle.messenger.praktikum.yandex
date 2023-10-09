export default class BaseComponent {
  constructor(protected element: HTMLElement) {}

  public getElement() {
    return this.element
  }
}
