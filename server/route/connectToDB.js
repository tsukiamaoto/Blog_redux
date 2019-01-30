//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://gomrdhl796@gmail.com:!easyDB66@ds021915.mlab.com:21915/blog-9527'
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
console.log('Database connection');
module.exports = mongoose;
