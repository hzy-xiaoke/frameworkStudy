const UserService = require('../services/UserService');

const UserController = {
  addUser: async (ctx) => {
    console.log(ctx.request.body);

    const { username, password, age } = ctx.request.body;
    const result = await UserService.addUser(username, password, age);
    console.log(result);

    ctx.body = {
      ok: 1,
      id: result._id
    };
  },
  updateUser: async (ctx) => {
    console.log(ctx.request.body, ctx.request.params);

    const { username, age } = ctx.request.body;
    const result = await UserService.updateUser(ctx.request.params.id, username, age);
    console.log(result);

    ctx.body = {
      ok: result.modifiedCount === 1 ? 1 : 0
    };
  },
  deleteUser: async (ctx) => {
    console.log(ctx.request.params);

    const result = await UserService.deleteUser(ctx.request.params.id);
    console.log(result);

    ctx.body = {
      ok: result.deletedCount === 1 ? 1 : 0
    };
  },
  getUsers: async (ctx) => {
    console.log(ctx.query);

    const { page, limit } = ctx.query;
    const data = await UserService.getUsers(page, limit);

    ctx.body = data;
  },
  getUserById: async (ctx) => {
    console.log(ctx.request.params);

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
      ctx.session.user = true;
      ctx.body = {
        ok: 1
      };
    }
  },
  logout: (ctx) => {
    delete ctx.session.user;
    ctx.body = {
      ok: 1
    };
  }
}

module.exports = UserController;