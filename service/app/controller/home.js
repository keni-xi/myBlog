'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<button>按钮</button>';
  }
}

module.exports = HomeController;


// get 获取资源
// post 新建资源
// put 更新资源
// delete 删除资源
