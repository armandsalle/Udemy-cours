const {
    SHA256
} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedpassword = '$2a$10$Bz/HoWeRhy7l3VzC29jqrehz6hLWeMjZbd3nXN4Y8Py/SVi3TqC3i';

bcrypt.compare(password, hashedpassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };


// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(`message ${message}`);
// console.log(`hash ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was change do not trust');
// }