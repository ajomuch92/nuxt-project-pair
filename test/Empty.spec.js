import { isEmpty } from '~/assets/scripts/utils'

describe('Checking empty objects', () => {
  test('is a Vue instance', () => {
    const arr = []
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(arr)).toBeTruthy()
    arr.push(1)
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty(arr)).toBeTruthy()
  })
})
