'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'result';
  }

  async getArticleList() {
    const sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduce as introduce ,' +
              'article.addTime as addTime ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.typeID = type.Id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }

  async getArticleById() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduce as introduce ,' +
              'article.articleContent as articleContent ,' +
              'article.addTime as addTime ,' +
              'type.typeName as typeName ,' +
              'type.id as typeId ,' +
              'FROM article LEFT JOIN type ON article.typeID = type.Id' +
              'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);

    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
