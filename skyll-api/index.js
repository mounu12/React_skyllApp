const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//access-contol-allow-origin
app.use(function(req,res,next){
      // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
 
// Connection URL
mongoose.connect('mongodb://localhost/revup-db',{ useMongoClient: true });
mongoose.Promise=global.Promise;

app.use('/api', require('./routes/api'));


app.listen(process.env.port || 8000, function(){
    console.log('now listening for requests');
});