const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const responseTime = require('response-time')
const middleware = [
    responseTime(),
    morgan('dev'),
    express.json(),
    cors()
]

module.exports = middleware