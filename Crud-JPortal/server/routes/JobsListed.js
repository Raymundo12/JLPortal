const express=require('express');
const route = express.Router()
const users = require('../models/user')


route.get('/', async (req, res) =>{
   try {
       const JobsListed = await user.find()
   } catch (err) {
       res.send('Error ' + err)
   }

})

//route.get('/', async(req,res)=>{
    //try {
      //  const JobsPosted = await Jobs.find()
        //res.json(JobsListed)          
    //} catch (err) {
      //    res.send('Error ' + err)         
    //}
//})


//route.post('/',async(req,res)=>{
    //const jobs = new query ({
           //name: req.body.name,
          // email: req.body.email,
           //KeyWord: req.body.KeyWord
   // })
   // try {
        //const a1 = await jobs.save()
        //res.json(a1)
    //} catch (err) {
       // res.send('error' + err)
    //}
    //res.render('add-user');
//})

//route.get('/update-user',(req,res)=>{
  //  res.render('add-user');
//})

module.exports = route

