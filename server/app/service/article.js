const Service = require('egg').Service

class ArticleService extends Service {
  async create (payload) {
    let article = {
      title: payload.title,
      content: payload.content,
      date: payload.date,
      author: payload.author
    }
    const result = await this.app.mysql.insert('article', article)
    const createSuccess = result.affectedRows === 1
    if (createSuccess) return true
    else return false
  }
  async getOne (id) {
    const result = await this.app.mysql.get('article', { id: id })
    return result
  }
  async getAll () {
    const result = await this.app.mysql.select('article')
    return result
  }
  async update (payload) {
    const result = await this.app.mysql.update('article', payload)
    const updateSuccess = result.affectedRows === 1
    if (updateSuccess) {
      return true
    } else {
      return false
    }
  }
  async delete (id) {
    const result = await this.app.mysql.delete('article', { id: id })
    const deleteSuccess = result.affectedRows === 1
    if (deleteSuccess) {
      return true
    } else {
      return false
    }
  }
}

module.exports = ArticleService
