const express=require('express');
const route = express.Router()
const users = require('../models/user')


route.get('/', async (req, res) =>{
   try {
       const JobsListed = await users.find()
   } catch (err) {
       res.send('Error ' + err)
   }

})

route.get('/', async(req,res)=>{
    try {
        const JobsPosted = await users.find()
        /es.json(JobsListed)          
    } catch (err) {
     res.send('Error ' + err)         
    }
})


route.post('/',async(req,res)=>{
    const user = new users ({
           name: req.body.name,
           email: req.body.email,
           KeyWord: req.body.KeyWord
    })
   try {
        const a1 = await user.save()
        res.json(a1)
    } catch (err) {
        res.send('error' + err)
    }
    res.render('');
})

//route.get('/update-user',(req,res)=>{
  //  res.render('add-user');
//})

module.exports = route

