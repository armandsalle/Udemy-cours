const request = require('request');
const apiKey_forecast = '7b8e970aafa75370b6ebc1d45c256997';

function getWeather(lat, lng, callback) {
    request({
        url: `https://api.darksky.net/forecast/${apiKey_forecast}/${lat},${lng}`,
        json: true
    }, (error, reponse, body) => {
        if (!error && reponse.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to connect');
        }

    });

};



module.exports = {
    getWeather
};