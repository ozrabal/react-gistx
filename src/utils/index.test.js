import { getToken, setHeaders } from '../utils'

test('should return token', () => {
  localStorage.setItem('token', 'token')
  expect(getToken()).toBe('token')
})

test('should return false', () => {
  localStorage.removeItem('token')
  expect(getToken()).toBe(false)
})

test('should return headers', () => {
  localStorage.setItem('token', 'token')
  expect(setHeaders()).toEqual({
    'Content-Type': 'application/json',
    'Authorization': `Bearer token`
  })
})
