//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://bswd5736:rilj3967@ds021915.mlab.com:21915/blog-9527';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
console.log('Database connection');
module.exports = mongoose;
