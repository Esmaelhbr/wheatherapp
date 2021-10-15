const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})




 forecast(40.1220, 25.4988, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})