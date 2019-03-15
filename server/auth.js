const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { secret, credential } = require('../secrets')
module.exports = router

router.post('/', (req, res) => {
  //Creates token with right credential
  if (req.body.credential === credential) {
    const payload = {
      check: true
    }

    const token = jwt.sign(payload, secret, {
      expiresIn: 1440 // expires in 24 hours
    })

    res.send(token)
  } else {
    res.status(401).send('Wrong Credential')
  }
})
