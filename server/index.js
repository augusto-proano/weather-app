const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')
const PORT = process.env.PORT || 3000
router = require('express').Router()

const app = express()
module.exports = app

//Logging middleware
app.use(morgan('dev'))

//Bodyparser middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

//Compression middleware
app.use(compression())

//Api routes
app.use('/api', require('./api'))

//Static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')))

//Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Error handling middleware
app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

//Start Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
