require('dotenv').load()
const base64 = require('base-64')
const request = require('request')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const gitHubStrategy = require('passport-github2').Strategy
const cors = require('cors')

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(obj, done) {
    done(null, obj)
})

let token = null
const APP_PROXY_PORT = process.env.APP_PROXY_PORT || 9000
const APP_PROXY_URL = process.env.APP_PROXY_URL + ':' + APP_PROXY_PORT

passport.use(new gitHubStrategy({
    clientID: process.env.API_CLIENT_ID,
    clientSecret: process.env.API_CLIENT_SECRET,
    callbackURL: APP_PROXY_URL + "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
          token = accessToken
          return done(null, profile)
    })
  }
))

const app = express()
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email gist' ] }), function(req, res){})

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect(process.env.APP_URL + '/token/' + token)
    }
)

// api
const authorizationHeader = function(authorizationString) {
    return {
        'User-Agent': 'request',
        'Content-Type': 'application/json',
        'Authorization': authorizationString
    }
}

// Fetch user gists
app.get('/_api/gists',function(req, res){
    if (req.headers.authorization) {
        const options = {
            uri: process.env.API_SERVER + '/gists',
            json: true,
            headers: authorizationHeader(req.headers.authorization)
        }
        request(options, (err, response, body) => {
            res.status(response.statusCode).send(body)
        })
    } else {
        res.status(401).send('Access denied')
    }
})

// Fetch single gist
app.get('/_api/gists/:id', (req, res) => {
    if (req.headers.authorization) {
        const options = {
            uri: process.env.API_SERVER + '/gists/' + req.params.id,
            json: true,
            headers: authorizationHeader(req.headers.authorization)
        }
        request(options, (err, response, body) => {
            res.status(response.statusCode).send(body)
        })
    } else {
        res.status(401).send('Access denied')
    }
})

// Validate access token
app.get('/_api/validate/:token', (req, res) => {
    const options = {
        uri: process.env.API_SERVER + '/applications/' + process.env.API_CLIENT_ID + '/tokens/' + req.params.token,
        json: true,
        method: 'GET',
        headers: authorizationHeader('Basic ' + base64.encode(process.env.API_CLIENT_ID + ':' + process.env.API_CLIENT_SECRET))
    }
    request(options, (err, response, body) => {
        res.status(response.statusCode).send(body)
    })
})

console.log('Started proxy server at '+ APP_PROXY_URL )
app.listen(APP_PROXY_PORT)
