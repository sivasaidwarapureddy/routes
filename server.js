 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const Person = require('./models/person');
 const db = require('./db');
 app.use(bodyParser.json());

app.get('/', () =>{
    res.send(" hello i am ghappy ");
    console.log("hello i am from  server app");

}) 


const personroutes = require('./routes/personrouter');
app.use('/',personroutes);


 app.listen(3000, ()=>{
    console.log(" hello server runing on 3000");
 })