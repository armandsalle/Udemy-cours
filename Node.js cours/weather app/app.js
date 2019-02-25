const yargs = require('yargs');
const geocode = require('./geocode/grocode');
const weather = require('./weather/weather');


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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.lattidtude, results.longtitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Il fait maintenant : ${weatherResults.temperature} °F. Mais le ressentis est de ${weatherResults.apparentTemperature} °F`);
            }
        });
    }
});