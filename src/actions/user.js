export const types = {
    REQUEST_USER: 'REQUEST_USER',
    RECEIVED_USER: 'RECEIVED_USER',
    ERROR_REQUESTING_USER: 'ERROR_REQUESTING_USER'
}

export const requestUser = () => ({
  type: types.REQUEST_USER
})

export const receivedUser = (user) => ({
  payload: {
    user
  },
  type: types.RECEIVED_USER
})

export const errorReceivedUser = (error) => ({
  payload: {
    error
  },
  type: types.ERROR_REQUESTING_USER
})
