const mongoose = require('mongoose');

const connect = () => {
    const url = 'mongodb+srv://44mkashif:gPHDe3w_Rq-rje-@cluster0.29zsw.mongodb.net/todo?retryWrites=true&w=majority';
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', err => {
        console.log(err);
    });
    db.once('open', () => {
        console.log('Database Connected Successfuly')
    })
}

module.exports = { connect };