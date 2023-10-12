import BaseComponent, { BaseComponentProps } from '@/components/Base'

export type PageType = {
  path: string
  source: BaseComponent<BaseComponentProps>
}

export default class Router {
  private currentPathname = window.location.pathname

  public use(page: PageType) {
    if (page.path === this.currentPathname) {
      new page.source()
    }
  }
}
