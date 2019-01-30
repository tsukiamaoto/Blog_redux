/// server package ///
const express = require('express');
const index = require('./server/route/home');
const post_controller = require('./server/route/controllers');
const bodyParser = require('body-parser');

//initial express server
const app = express();
const port = process.env.PORT || '8080';
//analyse html message e.g.POST,PUT,DELEDE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

///  GET home page ///
app.get('/' , index);

/// POST request for creating post /// 
app.post('/post/create' , post_controller.post_create_post);

/// GET requeest for quering all data ///
app.get('/post/queryAll' , post_controller.post_getAll_get);

/// POST request for quering one data ///
app.post('/post/queryOne' , post_controller.post_getOne_post);

/// POST request to delete Post ///
app.post('/post/delete' , post_controller.post_delete_post);

/// POST request to update Post ///
app.post('/post/update' , post_controller.post_update_post);

//listen port to create a channel with front-end
app.listen(port , ()=>{
    console.log("this port is " + port);
});
