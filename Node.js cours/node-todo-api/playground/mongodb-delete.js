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

    // supprimer des données
    // db.collection('Todos').deleteMany({
    //     text: 'Eat'
    // }).then((result) => {
    //     console.log(result);
    // });

    // supprimer 1
    // db.collection('Todos').deleteOne({
    //     text: 'Wolk the dog'
    // }).then((result) => {
    //     console.log(result);
    // });

    //chercher et supprimer
    // db.collection('Todos').findOneAndDelete({
    //     text: 'Wolk the dog'
    // }).then((result) => {
    //     console.log(result)
    // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c67221104542b23c2566849')
    }).then((result) => {
        console.log(result);
    })

    // client.close();

});