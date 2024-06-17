const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const compression = require("compression")


const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get('/', (req, res) => {
  const strCompress = 'Hello World'

  return res.status(200).json({
    message: "Welcom to our API",
    metadata: strCompress.repeat(10000)
  })
})
// init error handler

module.exports = app