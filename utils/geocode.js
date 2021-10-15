const request = require('request');

const geocode =(address, callback) => {
	

	request({url: url, json: true}, (error, response) => {
		if(error){
			callback('Unable to connect to location service', undefined);
		}else if(response.body.features.length ===0){
			callback('Unable to find location, try another search')
		}else{
			callback(undefined, {
				latitude : response.body.features[0].center[1],
				longitude :response.body.features[0].center[0],
				location : response.body.features[0].place_name
			})
		}
	})

}



module.exports = geocode;