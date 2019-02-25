// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDB');
    }

    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');



    // affiche toutes les données
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c657af8864d9821d8893a75')
    // }).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('enable to find todos');
    // })    

    db.collection('Users').find({
        name: 'Armand SALLE'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('enable to find todos');
    });



    // client.close();

});