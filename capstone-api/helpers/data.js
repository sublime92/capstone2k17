var db = require("../models");


exports.getAllData = function(req,res){
    db.Data.find()
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.postData = function(req,res){
    db.Data.create(req.body)
    .then(function(newData){
        res.json(newData);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getData = function(req,res){
    db.Data.findById(req.params.dataId)
    .then(function(foundData){
        res.json(foundData);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateData = function(req,res){
    db.Data.findOneAndUpdate({_id:req.params.dataId},req.body,{new:true})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteData = function(req,res){
   db.Data.remove({_id: req.params.dataId}) 
   .then(function(){
       res.json({message: 'Deleted!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;