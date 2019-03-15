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


export const weekDays = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thrusday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday',
}