require('dotenv').config("../.env")
const path = require('path')
const express = require('express')
const app = express()
const {notFoundHandler,errorHandler} = require('./error')
// access Public
const PublicDirectoryPath = path.join(__dirname,"../public")
app.use(express.static(PublicDirectoryPath))

// middleware library
app.use(require('./middleware'))

//router middleware
app.use(require('./router'))

// error handler middleware
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app