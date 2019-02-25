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

    //find and update (target, update,  return)
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c657a6f467b4421d2de4ec0')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Jade'
    }, {
        $set: {
            name: 'Armand'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();

});