const express = require('express');
const assert = require('assert');
const Post = require('../model/commentItem');
/// create a new data to save to the mongoDB
exports.post_create_post = function(req , res){
    let post = new Post( {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        update: req.body.date, 
    });
    console.log(post.title+'\n'+post.content+'\n'+post.author+'\n'+post.update+'\n');
    
    Post.create(post , function(error){
        assert.equal(null , error);
        console.log('post saved successfully');
        res.json({ success : true});
    });
};

/// GET all data from mongoDB ///
exports.post_getAll_get = function( req , res) {
    console.log('search data');
    Post.find( {},function(error , docs){
        assert.equal(null , error);
        console.log('get data from mongoDB successfully');
        res.json({ items : docs });
    } );   
};

/// search one data from mongoDB ///

exports.post_getOne_post = function( req , res) {
    //console.log(req.body);
    Post.findById( req.body.id , function( error , docs){
        assert.equal(null , error);
        console.log('search one data from mongoDB successfully');
        res.json( { items : docs});
    });
}

// modify a data to mongoDB 
exports.post_update_post = function(req , res ) {
    console.log(req.body.id);

    let post = {};
    post.title =  req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
    post.update = req.body.update;

    Post.findByIdAndUpdate(req.body.id , post , function(error){
        assert.equal(null , error); 
        console.log('data update successfully');
        res.json({ success : true});
    });
};

// delete a post from mongoDB
exports.post_delete_post = function(req , res ){
    console.log(req.body.id);
    Post.findByIdAndRemove(req.body.id , function(error){
        assert.equal( null , error );
        console.log('data was deleted successfully');
        res.json({ success : true});
    });
};