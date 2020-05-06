const request = require('request')

var fahrenheitToCelsius = require('fahrenheit-to-celsius');
 

//=> -17.2222

const url = "https://api.darksky.net/forecast/c63618907388467705928ed75a913201/37.8267,-122.4233?lang=es";

/*request({ url: url}, (error, response)=>{
	const data = JSON.parse(response.body)
	console.log(data.currently)
})*/

request({ url: url, json: true}, (error, response)=>{
	console.log(response.body.daily.data[0].summary+'it is corry '+fahrenheitToCelsius(response.body.currently.temperature))

})

