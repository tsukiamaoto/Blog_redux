'use strict';

module.exports = app => {
    const { router , controller } = app;
    //router.get('/' , controller.posts.home);
    router.get('/post/queryAll' , controller.posts.getAll);
    router.post('/post/create' , controller.posts.create);
    router.post('/post/queryOne' , controller.posts.getOne);
    router.post('/post/delete' , controller.posts.delete);
    router.post('/post/update' , controller.posts.update);
}