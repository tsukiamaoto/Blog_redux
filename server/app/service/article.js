const Service = require('egg').Service

class ArticleService extends Service {
  async create (payload) {
    let article = {
      title: payload.title,
      content: payload.content,
      date: payload.date,
      author: payload.author
    }
    console.log(article)
    const result = await this.app.mysql.insert('article', article)
    console.log('create success')
    console.log(result)
    const createSuccess = result.affectedRows === 1
    if (createSuccess) return true
    else return false
  }
  async getOne (id) {
    const result = await this.app.mysql.get('article', { id: id })
    console.log('get success')
    console.log(result)
    return result
  }
  async getAll () {
    const result = await this.app.mysql.select('article')
    console.log('get all data success')
    // console.log(result);
    return result
  }
  async update (payload) {
    const result = await this.app.mysql.update('article', payload)
    const updateSuccess = result.affectedRows === 1
    if (updateSuccess) {
      console.log('update success')
      return true
    } else {
      console.log('update failed')
      return false
    }
  }
  async delete (id) {
    const result = await this.app.mysql.delete('article', { id: id })
    console.log('delete success')
    const deleteSuccess = result.affectedRows === 1
    if (deleteSuccess) {
      console.log('delete success')
      return true
    } else {
      console.log('delete failed')
      return false
    }
  }
}

module.exports = ArticleService
