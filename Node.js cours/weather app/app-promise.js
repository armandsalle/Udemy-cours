const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=OnY7hAnjFGvO9HQXTcqIa3WkaOhdeMvF&location= ${encodeAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
        throw new Error('address non valide');
    }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/7b8e970aafa75370b6ebc1d45c256997/${lat},${lng}`
    console.log(response.data.results[0].locations[0].adminArea5)

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`Il fait ${temperature}, mais le ressentis est de ${apparentTemperature}`);

}).catch((e) => {

    if (e.code === 'ENOTFOUND') {
        console.log('Pas de connexion à API');
    } else {
        console.log(e.message);
    }

});