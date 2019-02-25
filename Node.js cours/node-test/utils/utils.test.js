const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33 + 44);
});

it('be a square', () => {
    var res = utils.square(3);

    if (res !== 9) {
        throw new Error('Expeted 9 ' + res)
    }
});