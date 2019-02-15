'use strict'

module.exports = (app) => {
  const { router, controller } = app
  // router.get('/' , controller.posts.home);
  router.get('/post', controller.posts.getAll)
  router.post('/post', controller.posts.create)
  router.get('/post/:id', controller.posts.getOne)
  router.delete('/post/:id', controller.posts.delete)
  router.put('/post/:id', controller.posts.update)
}
