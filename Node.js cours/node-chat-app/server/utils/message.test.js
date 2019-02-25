var expect = require('expect');

var {
    generateMessage,
    generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
    it("should generate correct message object", () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var lat = 15;
        var lng = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, lat, lng);

        expect(typeof message.createAt).toBe('number');
        expect(message).toMatchObject({
            from,
            url
        });

    });
});