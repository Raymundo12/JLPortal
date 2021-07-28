const express=require('express');
const route = express.Router()
const Jobs = require('../models/JobsListed')


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

