export const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true
  } else if (Object.prototype.toString.call(value) === '[object String]') {
    return value === ''
  } else if (value instanceof Date) {
    return false
  } else if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length === 0
  } else {
    return false
  }
}
