const express = require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path = require("path");
const { resolve } = require('dns');
const connectDB = require('./server/routes/database/connection')

const app = express();

dotenv.config({path:dotenv.config.env})
const PORT=process.env.PORT ||8080

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use('/ccc',express.static((path.resolve(__dirname,"assets/css"))))
app.use('/js',express.static((path.resolve(__dirname,"assets/js"))))

app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log('server is runing on http://localhost:${PORT}')});

