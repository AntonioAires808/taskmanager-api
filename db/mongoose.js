const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log('Connected to mongodb');
}).catch((e) => {
    console.log('Error trying to connect');
});