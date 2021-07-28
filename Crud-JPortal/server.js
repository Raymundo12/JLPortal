const express = require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path = require("path");
const { resolve } = require('dns');
const mongoose = require('mongoose')




const app = express();

dotenv.config({path:dotenv.config.env})
const PORT=process.env.PORT ||8080

app.use(morgan('tiny'));
mongoose.connect('DB_URL', { useUnifiedTopology: true, useNewUrlParser: true },()=>
console.log('Connected to the DB'));


app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use('/ccc',express.static((path.resolve(__dirname,"assets/css"))))
app.use('/js',express.static((path.resolve(__dirname,"assets/js"))))

app.use('/',require('./server/models/JobsListed'))

app.listen(PORT,()=>{console.log('server is runing on http://localhost:${PORT}')});

