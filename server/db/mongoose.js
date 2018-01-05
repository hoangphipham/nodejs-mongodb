var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://phipham:Hoang05phi12@ds157653.mlab.com:57653/node-todo-api')

module.exports = {mongoose};
