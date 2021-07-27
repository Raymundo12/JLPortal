const express=require('express');

const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index');
})

route.get('/add-user',(req,res)=>{
    res.render('add-user');
})

route.get('/update-user',(req,res)=>{
    res.render('add-user');
})

module.exports = route

const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
    } catch (error) {
        
    }
}