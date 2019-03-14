const router = require('express').Router()
const zipcodes = require('zipcodes')
module.exports = router

router.post('/', async (req, res, next) => {
  //Gets city's name with given zipcode
  try {
    const { zipcode } = req.body
    const { city } = await zipcodes.lookup(zipcode)
    res.send(city)
  } catch (err) {
    res.status(404).send('Zipcode Not Found')
  }
})
