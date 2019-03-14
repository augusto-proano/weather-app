const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { secret, credential } = require('../secrets')
module.exports = router

router.post('/', (req, res) => {
  if (req.body.credential === credential) {
    //Creates token with right credential
    const payload = {
      check: true
    }

    const token = jwt.sign(payload, secret, {
      expiresIn: 1440 // expires in 24 hours
    })

    res.json({
      message: 'Authentication Done ',
      token: token
    })
  } else {
    res.status(401).send('Wrong Credential')
  }
})
