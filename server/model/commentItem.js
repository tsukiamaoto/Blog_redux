//Import the mongoose module
//var mongoose = require('mongoose');
var mongoose = require('../route/connectToDB');
//Define a schema
const Schema = mongoose.Schema;
const BlogPost = new Schema({
    author: String , 
    title: String ,
    content: String ,
    update: Date ,
} , {collection :'posts'});

// Compile model from schema
const PostModel = mongoose.model('posts', BlogPost );
module.exports = PostModel;
