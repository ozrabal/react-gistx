//import fetch from 'isomorphic-fetch'
// https://gist.github.com/iNikNik/f39c7dbeef384966c5ec
/*
export const GET_TOKEN = 'GET_TOKEN'
export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED'
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS'
*/
export const types = {
    VALIDATE_TOKEN: 'VALIDATE_TOKEN',
    VALIDATED_TOKEN: 'VALIDATED_TOKEN',
    ERROR_VALIDATING_TOKEN: 'ERROR_VALIDATING_TOKEN'
}

export const validateToken = () => ({
    type: types.VALIDATE_TOKEN
})
export const validatedToken = (token) => ({
    payload: {
        token: token
    },
    type: types.VALIDATED_TOKEN
})

export const errorValidatingToken = (error) => ({
    payload: {
        error: error
    },
    type: types.ERROR_VALIDATING_TOKEN
})


/*
export function getToken() {
  //const data = { token: Date.now()}
  if (localStorage.getItem('token')){
      // fetch('https://api.github.com/user', {
          fetch('https://api.github.com/gists?per_page=10', {
          headers: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
  credentials: "same-origin"
      })

              //.then(response => response.json())
                  .then(json => {
                      console.log('json', json)
                  })

  return {
    type: 'GET_TOKEN_SUCCESS',
    token: localStorage.getItem('appToken')
  }
  }else{
      return  {
          type: 'GET_TOKEN_FAILED'
      }
  }
}
*/
