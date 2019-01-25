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

//app.set('views' , path.join(__dirname , '../public'));
//app.set('view engine' , 'pug');
//app.use("../public" , express.static( path.join(__dirname, '../public')));

///  GET home page ///
app.get('/' , index);

/// POST request for creating post /// 
app.post('/post/create' , post_controller.post_create_post);

/// GET requeest for quering data ///
app.get('/post/query' , post_controller.post_getAll_get);

/// GET request to delete Post ///
app.get('/post/delete' , post_controller.post_delete_get);

/// GET request to update Post ///
app.get('/post/update' , post_controller.post_update_get);

//

//listen port to create a channel with front-end
app.listen(port , ()=>{
    console.log("this port is " + port);
});
