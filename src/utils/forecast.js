const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=01897785115bab6e9f18a461323f54b6&units=metric'

    request({ url, json: true }, (error, response) => {

        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
           
            callback(undefined, 'Weather Description- '+response.body.weather[0].description + ' ,Temperature- ' + response.body.main.temp +' degree celsius')
        }
    })
}

module.exports = forecast