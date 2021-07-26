const express = require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const app = express();

dotenv.config({path:dotenv.config.env})
const PORT=process.env.PORT ||8080

app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Almost There");
})

app.listen(PORT,()=>{console.log('server is runing on http://localhost:${PORT}')});

