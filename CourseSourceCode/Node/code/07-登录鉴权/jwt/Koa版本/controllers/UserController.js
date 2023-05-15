const UserService = require('../services/UserService');
const JWT = require('../utils/JWT');

const UserController = {
  addUser: async (ctx) => {
    console.log(ctx.request.body, ctx.request.file);

    const avatar = ctx.request.file? '/uploads/' + ctx.request.file.filename : '/images/default.jpg';
    const { username, password, age } = ctx.request.body;
    const result = await UserService.addUser(username, password, age, avatar);
    // console.log(result);

    ctx.body = {
      ok: 1,
      id: result._id
    };
  },
  updateUser: async (ctx) => {
    // console.log(ctx.request.body, ctx.request.params);

    const { username, age } = ctx.request.body;
    const result = await UserService.updateUser(ctx.request.params.id, username, age);
    // console.log(result);

    ctx.body = {
      ok: result.modifiedCount === 1 ? 1 : 0
    };
  },
  deleteUser: async (ctx) => {
    // console.log(ctx.request.params);

    const result = await UserService.deleteUser(ctx.request.params.id);
    // console.log(result);

    ctx.body = {
      ok: result.deletedCount === 1 ? 1 : 0
    };
  },
  getUsers: async (ctx) => {
    // console.log(ctx.query);

    const { page, limit } = ctx.query;
    const data = await UserService.getUsers(page, limit);

    ctx.body = data;
  },
  getUserById: async (ctx) => {
    // console.log(ctx.request.params);

    const data = await UserService.getUserById(ctx.request.params.id);

    ctx.body = data[0];
  },
  login: async (ctx) => {
    const { username, password } = ctx.request.body;

    const result = await UserService.login(username, password);

    if (result.length === 0) {
      ctx.body = {
        ok: 0
      };
    } else {
      // console.log(result[0]);

      const token = JWT.generate({
        id: result[0]._id,
        username: result[0].username
      }, 60 * 60);

      ctx.set('Authorization', token);
      ctx.body = {
        ok: 1
      };
    }
  }
}

module.exports = UserController;