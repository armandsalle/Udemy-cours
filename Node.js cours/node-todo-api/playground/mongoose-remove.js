const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

//delete all = Todo.remove({}).then....

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove({}).then((result)=>{});

Todo.fAndDelete('5c687bb26a68093674fef684').then((todo) => {
    console.log(todo);
});