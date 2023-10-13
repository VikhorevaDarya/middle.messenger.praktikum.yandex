import { Error } from '@/components'
import { ErrorLayout } from '@/layouts'

export default class ServerError {
  constructor() {
    return new ErrorLayout({
      children: {
        error: new Error({ status: 500, text: `We've already fixed it` }),
      },
    })
  }
}
