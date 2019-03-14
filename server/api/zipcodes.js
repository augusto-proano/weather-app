const router = require('express').Router()
const zipcodes = require('zipcodes')
module.exports = router

router.post('/', async (req, res) => {
  try {
    //Gets city's name with given zipcode
    const { location } = req.body
    const { city } = await zipcodes.lookup(location)
    res.send(city)
  } catch (err) {
    res.status(404).send('Zipcode Not Found')
  }
})
