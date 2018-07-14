var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/capstone-api',{useMongoClient: true});

mongoose.Promise = Promise;
module.exports.Data = require('./data.js');