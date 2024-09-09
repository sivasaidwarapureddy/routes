// const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/hostels'   // our data base name 

// mongoose.connect(mongoURL);  // connecting our server with mongo db  

// const db = mongoose.connection;

const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hostels' 

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to mongo db server');
})

db.on('disconnected', ()=>{
    console.log('disconnected from mongo db server');
})

db.on('error', (err)=>{
    console.log('not connected due to from mongo db server', err);
})

module.exports = db;