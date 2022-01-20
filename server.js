const express = require('express')
const server = express()
server.use(express.json())
const recipeRouter = require('./router')

server.use('/api/recipe', recipeRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: error.stack
  })
})

module.exports = server