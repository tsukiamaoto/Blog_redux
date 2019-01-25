var express = require('express');
var Post = require('../model/file');
var assert = require('assert');
// connect to database 
var db = require('./connect');

/// create a new data to save to the mongoDB
exports.post_create_post = function(req , res){
    var post = new Post( {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        update: req.body.date, 
    });

    console.log(post.title+'\n'+post.content+'\n'+post.author+'\n'+post.update+'\n');
    
    db.collection("post").insertOne(post , (error) =>{
        assert.equal(null , error);
        console.log('post saved successfully');
        res.json({success:true});
        db.close();
    });
};

/// GET all data from mongoDB ///
exports.post_getAll_get = function( req , res) {
    var resultArray = [];
    //Post.find({})
    var cursor = db.collection('post').find();
    cursor.forEach(function(doc , error){
        assert.equal(null , error);
        resultArray.push(doc);
    } , function(){
        db.close();
        res.json({items: resultArray , success:true});
    })
};

// modify a data to mongoDB 
exports.post_update_get = function(req , res ) {
    var post = new Post( {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        update: req.body.date, 
    });

    db.collection("post").updateOne(post , function(error){
        assert.equal(null , error);
        console.log('data update successfully');
        res.json({success:true});
        db.close();
    });
};

// delete a post from mongoDB
exports.post_delete_get = function(req , res ){
    var post = new Post( {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        update: req.body.date, 
    });

    db.collection("post").deleteOne(post , function(error){
        assert.equal( null , error );
        console.log('data was deleted successfully');
        res.json({success:true});
        db.close();
    });
};