'use strict'

const Controller = require('egg').Controller

/* const article = {
  title: { type: 'string' },
  content: { type: 'string' },
  author: { type: 'string' },
  update: { type: 'string' }
} */

class PostsController extends Controller {
  async create () {
    const { ctx, service } = this
    // const createRule = article;

    // ctx.validate(createRule);
    const req = ctx.request.body
    const res = await service.article.create(req)
    ctx.body = { success: res }
    // ctx.status = 201;
  }

  async getAll () {
    const { ctx, service } = this

    const res = await service.article.getAll()
    ctx.body = { items: res }
    // ctx.statux = 200;
  }

  async getOne () {
    const { ctx, service } = this
    const id = ctx.params.id
    console.log(id)
    const res = await service.article.getOne(id)
    ctx.body = { items: res }
    // ctx.status = 200;
  }

  async update () {
    const { ctx, service } = this
    // const createRule = article

    // ctx.validate(createRule);
    const req = ctx.request.body
    const res = await service.article.update(req)

    ctx.body = { success: res }
    // ctx.status = 200;
  }

  async delete () {
    const { ctx, service } = this
    const id = ctx.params.id

    const res = await service.article.delete(id)
    ctx.body = { success: res }
    // ctx.status = 200;
  }
}

module.exports = PostsController
