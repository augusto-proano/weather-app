const request = require('request-json')
const router = require('express').Router()
module.exports = router

const weatherAPI = request.createClient(
  'https://www.metaweather.com/api/location/'
)

router.post('/', async (req, res, next) => {
  const { location } = req.body

  try {
    //Get where on Earth ID
    const city = await weatherAPI.get(`search/?query=${location}`)
    const { woeid } = city.body[0]

    //Get and send forecast from API
    const forecast = await weatherAPI.get(`${woeid}`)
    res.send(forecast.body)
  } catch (err) {
    res.status(404).send('Location Not Found')
  }
})
