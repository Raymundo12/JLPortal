//his is my model data representing my collection in mongo atlas called books..and the fields below will be generated automatically
var mongoose = require('mongoose');//to interact with the MongoDBatlas database called books 

var jobSchema = new mongoose.Schema({ 
    FullName: { type: String, unique: true},
    email: { type: String},
    KeyWord: { type: String},
     
},
{ timestamps: true }
);
//important 'books creates a table inside mongo atlas and push my bookSchema retrieved);
module.exports = mongoose.model('jobs', jobSchema);