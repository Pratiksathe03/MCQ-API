const express = require('express');
const mongoose = require('mongoose');

const app = express();

const url =  'mongodb://localhost:27017/mcqtestdb'
mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection

con.on('open',()=>{
    console.log("connected....")
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, FETCH');
    next();
});

const routers = require('./routers/index');
app.use('/api',routers)

app.listen(8081,()=>{
    console.log("server is running...")
})

