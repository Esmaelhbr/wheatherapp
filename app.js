const request = require('request');

//api goes here

// request({url: url, json: true}, (error, response)=>{
	
// 	if(error){
// 		console.log("unable to connect to wheater service");
// 	}else if(response.body.error){
// 		console.log("unable to find location");
// 	}else{
// 		console.log(response.body.current.weather_descriptions[0]+ ". it is curretly " + response.body.current.temperature + " and it feels like " + response.body.current.feelslike);

// 	}

// 	// console.log(response.body.current);
// });

request({url: geocodeURL, json: true}, (error,response)=>{
	if(error){
		console.log("Unable to connect with location service");
	}else if(response.body.features.length ==0){
		console.log("Unable to find your location, try another search");
	}
	else{
		const latitude = response.body.features[0].center[1];
		const longitude = response.body.features[0].center[0];
		console.log(latitude, longitude);
	}
	
});


//response.body.features