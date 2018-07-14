var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    analogData:{
        type:String,
        required:'Name cannot be blank'
    },
    date:{
        type:Date,
        default:Date.now
    }
});

var Data = mongoose.model('Data',dataSchema);
module.exports = Data;