import { errorValidatingToken } from '../actions/auth'

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
      errorValidatingToken('err')
      return false
  }
  return token
}

export const setHeaders = () => {
  const token = getToken()
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
}
