var moment = require('moment');

var createAt = 1234;
var date = moment(createAt);
date.locale('fr');
console.log(date.format('hh:mm a'))
