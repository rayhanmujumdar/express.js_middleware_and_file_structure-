const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const middleware = [
    morgan('dev'),
    express.json(),
    cors()
]

module.exports = middleware