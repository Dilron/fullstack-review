require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive(CONNECTION_STRING).then(res => {
    app.set('db', res)
    console.log('db set')
    app.listen(SERVER_PORT, () => {
        console.log('listening on port: ', SERVER_PORT)
    })
})

app.get('/api/users', ctrl.getUsers)

app.post('/auth/register', ctrl.register)

app.post('/auth/login', ctrl.login)

app.get('/auth/details', ctrl.getDetails)

app.get('/auth/logout', ctrl.logout)
