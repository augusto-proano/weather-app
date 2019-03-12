const router = require('express').Router()
module.exports = router

router.use('/forecast', require('./forecast'))

//Error handler route
router.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})
