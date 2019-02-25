const request = require('request');


var geocodeAdress = (address) => {
    return new Promise((resolve, reject) => {

        let url = `http://www.mapquestapi.com/geocoding/v1/address?key=OnY7hAnjFGvO9HQXTcqIa3WkaOhdeMvF&location= ${encodeURIComponent(address)}`;
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Pas de connexion avec API');
            } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
                reject('Address non valide');
            } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
                resolve({
                    lattidtude: body.results[0].locations[0].latLng.lat,
                    longtitude: body.results[0].locations[0].latLng.lng
                });
            }
        });
    });
};

geocodeAdress('49100').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (error) => {
    console.log(error)
})