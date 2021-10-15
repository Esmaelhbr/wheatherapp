const request = require('request');


const forecast=(latitude, longitude, callback)=>{
	
	request({url: url, json: true},(error,response)=>{
		if(error){
			callback('unable to connect to wheather service', undefined);
			
		}else if(response.body.error){
			callback('unable to find location',undefined)
		}else{
			callback('undefined', response.body.current.weather_descriptions[0]+ ". it is curretly " + response.body.current.temperature + " and it feels like " + response.body.current.feelslike);
			
		}
	})
}

module.exports = forecast;