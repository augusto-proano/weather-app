const request = require('request-json')
const router = require('express').Router()
module.exports = router

const currentToken = 'helloworld'
const weatherApi = request.createClient(
  'https://www.metaweather.com/api/location/'
)

router.post('/', async (req, res, next) => {
  const { location, token } = req.body
  //Get where on Earth ,ID
  const city = await weatherApi.get(`search/?query=${location}`)
  const { woeid } = city.body[0]

  //Get and send forecast from API
  const forecast = await weatherApi.get(`${woeid}`)
  res.send(forecast.body)
})

//Error handler route
router.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})
