const jwt = require('jsonwebtoken')
const { secret } = require('../../secrets')
const router = require('express').Router()
module.exports = router

//Auth middleware
router.use((req, res, next) => {
  // Checks header for the token
  var token = req.headers['access-token']

  // decode token
  if (token) {
    // Verifies secret and checks if the token is expired
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({error: 'Invalid Token'});
      } else {
        // If right, saves to request for use in other routes
        req.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token
    res.status(401).send({error: 'Not Authorized'})
  }
})

router.use('/forecast', require('./forecast'))
router.use('/zipcodes', require('./zipcodes'))

//Error handler route
router.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})
