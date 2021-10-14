const request = require('request');

//api goes here


request({url: url, json: true}, (error, response)=>{
	console.log(response.body.current);
	console.log(response.body.current.weather_descriptions[0]+ ". it is curretly " + response.body.current.temperature + " and it feels like " + response.body.current.feelslike);
 
});


