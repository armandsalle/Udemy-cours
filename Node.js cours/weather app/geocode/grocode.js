const request = require('request');


function geocodeAddress(address, callback) {

    var encodeAddress = encodeURIComponent(address);

    let url = `http://www.mapquestapi.com/geocoding/v1/address?key=OnY7hAnjFGvO9HQXTcqIa3WkaOhdeMvF&location= ${encodeAddress}`;

    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Pas de connexion avec API');
        } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
            callback('Address non valide');
        } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
            callback(undefined, {
                lattidtude: body.results[0].locations[0].latLng.lat,
                longtitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
};