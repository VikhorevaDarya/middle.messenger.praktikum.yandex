import { RouteType } from "./types"
// import pug from 'pug'

// const SELECTORS = {
//   root: 'root'
// }

export default class Router {
  //private root = document.getElementById(SELECTORS.root)
  private currentRoute = window.location.pathname

  public renderPage(route: RouteType) {
    if (this.currentRoute === route.pathName) {
      //this.root.appendChild(pug.renderFile(route.page))

      //console.log(pug.compile(route.page))
    }
  }
}