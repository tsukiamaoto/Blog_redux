//Import the mongoose module
var mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const BlogPost = new Schema({
    author: String , 
    title: String ,
    content: String ,
    update: Date ,
});

// Compile model from schema
const PostModel = mongoose.model('PostModel', BlogPost );
module.exports = PostModel;
