export const toCamelCase = (str) => {
  const newStr = str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('')
 
  return `${newStr[0].toLowerCase()}${newStr.slice(1)}`
 }

 export const weatherIcons = {
  snow: 'wi wi-snow',
  sleet: 'wi wi-sleet',
  hail: 'wi wi-hail',
  thunder: 'wi wi-thunderstorm',
  heavyRain: 'wi wi-rain',
  lightRain: 'wi wi-showers',
  showers: 'wi wi-day-showers',
  heavyCloud: 'wi wi-cloudy',
  lightCloud: 'wi wi-day-cloudy',
  clear: 'wi wi-day-sunny'
}

//Date info
const date = new Date()
const fullDate = date.toDateString().split(' ')

export const weekDays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thrusday',
  5: 'Friday',
  6: 'Saturday'
}

export const currentDay = weekDays[date.getDay()]