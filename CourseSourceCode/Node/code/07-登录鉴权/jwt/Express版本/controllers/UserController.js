const UserService = require('../services/UserService');
const JWT = require('../utils/JWT');

const UserController = {
  addUser: async (req, res) => {
    console.log(req.body,req.file);

    const avatar = req.file? '/uploads/' + req.file.filename : '/images/default.jpg';
    const { username, password, age } = req.body;
    const result = await UserService.addUser(username, password, age, avatar);
    console.log(result);

    res.send({
      ok: 1,
      id: result._id
    });
  },
  updateUser: async (req, res) => {
    console.log(req.body, req.params);

    const { username, age } = req.body;
    const result = await UserService.updateUser(req.params.id, username, age);
    console.log(result);

    res.send({
      ok: result.modifiedCount === 1 ? 1 : 0
    });
  },
  deleteUser: async (req, res) => {
    console.log(req.params);

    const result = await UserService.deleteUser(req.params.id);
    console.log(result);

    res.send({
      ok: result.deletedCount === 1 ? 1 : 0
    });
  },
  getUsers: async (req, res) => {
    console.log(req.query);

    const { page, limit } = req.query;
    const data = await UserService.getUsers(page, limit);

    res.send(data);
  },
  getUserById: async (req, res) => {
    console.log(req.params);

    const data = await UserService.getUserById(req.params.id);

    res.send(data[0]);
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    const result = await UserService.login(username, password);

    if (result.length === 0) {
      res.send({
        ok: 0
      });
    } else {
      console.log(result[0]);

      const token = JWT.generate({
        id: result[0]._id,
        username: result[0].username
      }, 60 * 60);

      res.header('Authorization',token);
      res.send({
        ok: 1
      });
    }
  }
}

module.exports = UserController;