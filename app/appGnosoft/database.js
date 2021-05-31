const mongoose = require('mongoose');

mongoose.connect('mongodb://loclahost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));