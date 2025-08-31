const express = require('express')
const userModel = require('./models/user.model')
const authroutes = require('./routes/auth.routes')
const cookie = require('cookie-parser')
const app = express()
app.use(express.json())
app.use('/auth',authroutes)


module.exports = app