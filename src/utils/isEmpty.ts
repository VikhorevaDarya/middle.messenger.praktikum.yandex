import isObject from './isObject'

export default function isEmpty<T>(value: T): boolean | undefined {
  if (value) {
    if (Array.isArray(value)) return value.length === 0
    if (isObject(value)) return Object.keys(value as Object).length === 0
    if (value instanceof Map || value instanceof Set) return value.size === 0
    if (typeof value === 'string') return !Boolean(value)
  } else {
    return true
  }
}
