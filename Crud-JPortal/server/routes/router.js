//dependencies modules
const express = require('express')
const Jobs = require('../models/jobs')//books is where my schema is
const routerJ = express.Router()
// //This are APIs that node.js express server exports, learned in class 
// //Routes and Controller for handling all CRUD = Create, Read, Update, Delete/POST/GET/PUT/DELETE
// //this call view/bookart/new 
routerJ.get('/new', (req, res) => {
res.render('router/new', {part: new Jobs() })
})

//router.get('/edit/:id', async (req, res) => { 
//const part = await Book.findById(req.params.id) 
  
//res.render('bookart/edit', { part: part })
//})

//router.get('/:id', async (req, res) => {
//   const part = await Book.findById()
//   if (part == null) { // checking if part is null. if true sending a status code 404 and a error message.
//  return res.status(404).json({message: 'Ops! cant find this book by id'})
//   } 
//   res.redirect('/')// if succesful, redirects user to the bookpage 
   
// })

// // CREATE AND SAVE BOOK.

routerJ.post('/', async (req, res, next) => {
req.part = new Jobs() 
next()
}, savejobsAndRedirect('new')) // calling the function to create new record


// // request UPDATE/ PUT  by id
// router.put('/:id', async (req, res, next) => { 
//   req.part = await Book.findById(req.params.id) 
//   next()

// }, saveBooktAndRedirect('edit')) // calling the function to edit the document


// //request DELETE by id
// router.delete('/:id', async (req, res)=> { 
//     await Book.findByIdAndDelete(req.params.id)
//     res.redirect('/#Audiobook')

// })

// //function UPDATE/ PUT/ CREATE BOOK on my web book page and my mongo db atlas
function savejobstAndRedirect(path) { 
return async (req, res) => {
let part = req.part
part.user = req.body.user
part.email = req.body.email
part.keyWord = req.body.keyWord
    
try {
part = await part.save() // everything is saved to the Rest database collection

 res.redirect(`/#Jobs`)
} catch (e) {
 
return res.status(400).json({message: 'Ops! Validation fail for the request'}) // in case runs in a error.
    }
   }
 }

module.exports = routerJ
