import { ErrorLayout } from '@/layouts'
import { Error } from '@/components'

export default class NotFound {
  constructor() {
    return new ErrorLayout({
      children: {
        error: new Error({ status: 404, text: 'Not found' }),
      },
    })
  }
}
