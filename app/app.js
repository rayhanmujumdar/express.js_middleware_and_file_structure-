require('dotenv').config("../.env")
const express = require('express')
const app = express()
const {notFoundHandler,errorHandler} = require('./error')
// middleware library
app.use(require('./middleware'))

//router middleware
app.use(require('./router'))

// error handler middleware
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app