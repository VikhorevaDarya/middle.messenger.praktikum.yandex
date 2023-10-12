import { ErrorLayout } from '@/layouts'
import { Error } from '@/components'

export default class NotFound {
  constructor() {
    return new ErrorLayout({
      children: new Error({}),
    })
  }
}
