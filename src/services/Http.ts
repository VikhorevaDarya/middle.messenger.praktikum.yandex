import { queryStringify } from '@/utils'

enum METHODS {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

const DEFAULT_TIMEOUT = 5000

export type RequestOptionsType<
  TData = Record<string, string | number | string[] | number[]> | FormData,
> = {
  method?: METHODS
  headers?: Record<string, string>
  data?: TData
  timeout?: number
}

export type HTTPMethodType = <TResponse>(
  url: string,
  options?: RequestOptionsType,
) => Promise<TResponse>

export default class Http {
  constructor(private baseUrl: string) {}

  public get: HTTPMethodType = (url, options = {}) => {
    url = options.data ? `${url}?${queryStringify(options.data)}` : url

    return this.request(url, {
      ...options,
      timeout: options.timeout,
      method: METHODS.GET,
    })
  }

  public post: HTTPMethodType = (url, options = {}) => {
    return this.request(url, {
      ...options,
      timeout: options.timeout,
      method: METHODS.POST,
    })
  }

  public put: HTTPMethodType = (url, options = {}) => {
    return this.request(url, {
      ...options,
      timeout: options.timeout,
      method: METHODS.PUT,
    })
  }

  public delete: HTTPMethodType = (url, options = {}) => {
    return this.request(url, {
      ...options,
      timeout: options.timeout,
      method: METHODS.DELETE,
    })
  }

  public request: HTTPMethodType = (
    url,
    options = {
      method: METHODS.GET,
      headers: {},
      data: {},
      timeout: DEFAULT_TIMEOUT,
    },
  ) => {
    const { method, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      const handleError = (xhr: XMLHttpRequest) => {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`)

        return xhr
      }

      xhr.open(method, `${this.baseUrl || ''}/${url}`)

      xhr.withCredentials = true

      xhr.timeout = options.timeout || DEFAULT_TIMEOUT

      Object.entries(options.headers || {}).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      xhr.onabort = reject || handleError
      xhr.onerror = reject || handleError
      xhr.ontimeout = reject || handleError

      xhr.onload = function () {
        const isSuccess = xhr.status === 200 || xhr.status === 201

        if (isSuccess) {
          try {
            return resolve(JSON.parse(xhr.response))
          } catch {
            return resolve(xhr.response)
          }
        }

        return reject(xhr)
      }

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }

      return xhr
    })
  }
}
