//his is my model data representing my collection in mongo atlas called jobs..and the fields below will be generated automatically
var mongoose = require('mongoose');//to interact with the MongoDBatlas database called jobs 

var jobSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: { type: Number},
    name: { type: String},
    //what variables are you going to put here?
    
},
{ timestamps: true }
);

module.exports = mongoose.model('jobs', jobSchema);//important 'jobs creates a table inside mongo atlas and push my bookSchema retrieved);