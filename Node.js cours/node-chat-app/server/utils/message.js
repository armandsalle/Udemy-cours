var date = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: date.valueOf()
    };
};

var generateLocationMessage = (from, latitude, longtitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longtitude}`,
        createAt: date.valueOf()
    };
};

module.exports = {
    generateMessage: generateMessage,
    generateLocationMessage: generateLocationMessage
};
