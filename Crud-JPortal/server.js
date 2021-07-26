const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Almost There");
})

app.listen(3000,()=>{console.log('server is runing on http://localhost:${3000}')});

