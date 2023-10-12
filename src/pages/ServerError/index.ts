import { Error } from '@/components'
import { ErrorLayout } from '@/layouts'

import templateString from './index.pug'

export default class ServerError {
  protected template = templateString

  constructor() {
    return new ErrorLayout({
      children: new Error({}),
    })
  }
}
